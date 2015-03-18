"use strict";

var Reflux = require('reflux');

var initialMenu = [
    {
        'type': 'dropdown',
        'name': 'Alchimie',
        'target': 'alchemy',
        'items': [
            {
                'type': 'link',
                'name': 'Ingredients',
                'target': 'alchemy_ingredients'
            },
            {
                'type': 'link',
                'name': 'Effets',
                'target': 'alchemy_effects'
            },
            {
                'type': 'separator',
                'name': 'Separator',
                'target': 'sep_1'
            },
            {
                'type': 'link',
                'name': 'Recettes (Par ingredients)',
                'target': 'alchemy_ingredients_recipes'
            }
        ]
    }
];

var MenuStore = Reflux.createStore({
    init() {
        this.menuItems = initialMenu;
    }
});

module.exports = MenuStore;
