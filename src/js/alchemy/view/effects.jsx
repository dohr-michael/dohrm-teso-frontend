'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    Reflux = require('reflux'),
    Store = require('../store'),
    Img = require('../../components/basics').Img,
    _ = require('lodash'),
    actions = require('../actions');

var EffectRow = React.createClass({
    propTypes: {
        effect: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <tr>
                <td>
                    <span>
                        {this.props.effect.name}
                    </span>
                </td>
                <td>
                    <ul>
                        {_.sortBy(this.props.effect.ingredients, 'name').map((ingredient)=>(
                            <li>
                                <Img src={ingredient.image} />
                                &nbsp;{ingredient.name}
                            </li>
                        ))}
                    </ul>
                </td>
            </tr>
        );
    }
});


module.exports = React.createClass({
    displayName: "Effets",
    mixins: [
        Router.Navigation,
        Router.State,
        React.addons.LinkedStateMixin,
        Reflux.connect(Store, 'effects')
    ],
    getInitialState() {
        return {
            effects: Store.effects,
            search: ''
        };
    },
    componentWillMount() {
        actions.fetchAllEffects();
    },
    search(effect) {
        var idxOf = (name) => (name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1);
        return effect &&
            (effect.name && idxOf(effect.name) ||
            effect.effects && _.findIndex(effect.ingredients, (ingredient)=>(idxOf(ingredient.name))) > -1);
    },
    render() {
        var filter = this.state.search !== '' ? this.search : () => true;
        return (
            <div className="container-fluid">
                <div className="row">
                    <input className="col-xs-12 form-control" type="text"
                        placeholder="Filter by name / ingredients" autofocus valueLink={this.linkState('search')}/>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-bordered col-xs-12">
                        <thead>
                            <tr>
                                <th width="50%">Name</th>
                                <th width="50%">Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_.sortBy(this.state.effects.filter(filter), 'name').map((item)=>(
                                <EffectRow key={item.ref} effect={item}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});
