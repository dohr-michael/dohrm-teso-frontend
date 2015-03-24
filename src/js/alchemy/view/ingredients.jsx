'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    Reflux = require('reflux'),
    Store = require('../store'),
    Img = require('../../components/basics').Img,
    _ = require('lodash'),
    actions = require('../actions');

var IngredientRow = React.createClass({
    propTypes: {
        ingredient: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <tr>
                <td>
                    <span>
                        <Img src={this.props.ingredient.image} />
                    &nbsp;{this.props.ingredient.name}
                    </span>
                </td>
                <td>
                    <ul>
                        {_.sortBy(this.props.ingredient.effects, 'name').map((effect)=>(<li>{effect.name}</li>))}
                    </ul>
                </td>
            </tr>
        );
    }
});


module.exports = React.createClass({
    displayName: "Ingredients",
    mixins: [
        Router.Navigation,
        Router.State,
        React.addons.LinkedStateMixin,
        Reflux.connect(Store, 'ingredients')
    ],
    getInitialState() {
        return {
            ingredients: Store.ingredients,
            images: Store.images,
            search: ''
        };
    },
    componentWillMount() {
        actions.fetchAllIngredients();
    },
    search(ingredient) {
        var idxOf = (name) => (name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1);
        return ingredient &&
            (ingredient.name && idxOf(ingredient.name) ||
            ingredient.effects && _.findIndex(ingredient.effects, (effect)=>(idxOf(effect.name))) > -1);
    },
    render() {
        var filter = this.state.search !== '' ? this.search : () => true;
        return (
            <div className="container-fluid">
                <div className="row">
                    <input className="col-xs-12 form-control" type="text"
                        placeholder="Filter by name / effect" autofocus valueLink={this.linkState('search')}/>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-bordered col-xs-12">
                        <thead>
                            <tr>
                                <th width="50%">Name</th>
                                <th width="50%">Effects</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_.sortBy(this.state.ingredients.filter(filter), 'name').map((item)=>(
                                <IngredientRow key={item.ref} ingredient={item}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

