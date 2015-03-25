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

var effectsPromise = new Promise((resolve, reject)=> {
    $.get("http://api.dohrm.fr/teso/effects")
        .done((effects)=> {
            resolve(effects);
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

var mapEffectWithIngredient = (effect) => {
    var result = mapEffect(effect);
    result.ingredients = effect.ingredients.map(mapIngredient);
    return result;
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
        name: ingredient.name['fr']
    }
};

var mapIngredientWithEffects = (ingredient)=> {
    var result = mapIngredient(ingredient);
    result.effects = ingredient.effects.map(mapEffect);
    return result;
};


module.exports = Reflux.createStore({
    init() {
        this.ingredients = [];
        this.effects = [];
        this.listenTo(Actions.fetchAllIngredients, this.fetchAllIngredients, ()=>(''));
        this.listenTo(Actions.fetchAllEffects, this.fetchAllEffects, ()=>(''));
    },

    fetchAllIngredients() {
        ingredientsPromise.then((ingredients)=> {
            this.ingredients = ingredients.map(mapIngredientWithEffects);
            this.trigger(this.ingredients);
        });
    },

    fetchAllEffects() {
        effectsPromise.then((effects)=> {
            this.effects = effects.map(mapEffectWithIngredient);
            this.trigger(this.effects);
        });
    }
});
