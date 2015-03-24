'use strict';

var Reflux = require('reflux'),
    Actions = require('./actions'),
    $ = require('jquery'),
    _ = require('lodash');

// Api call promise definitions.

var ingredientsImagesPromise = new Promise((resolve, reject)=> {
    $.get("http://api.dohrm.fr/teso/resources/images/ingredients")
        .done((images)=> {
            resolve(images)
        })
        .fail((data)=> {
            if (reject) {
                reject(data);
            }
        });
});

var ingredientsPromise = new Promise((resolve, reject)=> {
    $.get("http://api.dohrm.fr/teso/ingredients")
        .done((ingredients)=> {
            resolve(ingredients);
        })
        .fail((data)=> {
            if (reject) {
                reject(data);
            }
        });
});

var mapEffect = (effect) => {
    return {
        ref: effect.ref,
        name: effect.name['fr']
    }
};

// Mappers.

var mapIngredient = (ingredient) => {
    return {
        ref: ingredient.ref,
        image: new Promise((resolve, reject)=> {
            ingredientsImagesPromise
                .then((images)=> {
                    var img = images && images[ingredient.ref] ? 'data:image/gif;base64,' + images[ingredient.ref] : null;
                    resolve(img);
                })
                .catch((data)=> {
                    if (reject) {
                        reject(data);
                    }
                });
        }),
        name: ingredient.name['fr'],
        effects: ingredient.effects.map(mapEffect)
    }
};


module.exports = Reflux.createStore({
    init() {
        this.ingredients = [];
        this.listenTo(Actions.fetchAllIngredients, this.fetchAllIngredients, ()=>(''));
        this.listenTo(Actions.fetchAllImages, this.fetchAllImages, ()=>(''));
    },

    fetchAllIngredients() {
        if (this.ingredients.length == 0) {
            ingredientsPromise.then((ingredients)=> {
                this.ingredients = ingredients.map(mapIngredient);
                this.trigger(this.ingredients);
            });
        }
    }
});
