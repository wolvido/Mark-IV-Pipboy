$(document).ready(function() {

    $(".item-menu > li > button").click(function() {
        $('.item-menu > li > button.item-menu__button_active').removeClass('item-menu__button_active');
        $(this).addClass("item-menu__button_active");
        let clickedItem = $(this).attr('class').split(" ")[0];

        console.log(clickedItem);

        let clickedWeapon = weapons.find(weapon => weapon.name === clickedItem);
        console.log(clickedWeapon);

        $('.inventory__item_damage').find('span.item-specs__points').html(clickedWeapon.damage);
        $('.inventory__item_fire-rate > .item-specs__points').html(clickedWeapon.fire_rate);
        $('.inventory__item_range > .item-specs__points').html(clickedWeapon.range);
        $('.inventory__item_accuracy > .item-specs__points').html(clickedWeapon.accuracy);
        $('.inventory__item_weight > .item-specs__points').html(clickedWeapon.weight);
        $('.inventory__item_value > .item-specs__points').html(clickedWeapon.value);
    });

    var weapons = [
        {
            "name": "44-pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        },
        {
            "name": "10mm-pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53
        },
        {
            "name": "assault-rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        }
    ]

});

