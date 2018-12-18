$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    $("#search-icon").on('click', function () {
        $('#search-input').toggleClass('search-hidden search-showing', 1000, "easeOutSine")
    });

    $("select[name='make']").change(()=> {
        $("select[name='model']").removeAttr("disabled");
    });

    const audiModels = ['A4', 'A8', 'A3'];
    const bmwModels = ['2', 'M240i', 'M2'];
    const chevroletModels = ['Bolt', 'Camaro', 'Equinox'];

    $("#make").change(function () {
        let car = this.value;
        if (car == 'audi'){
            audiModels.map(car => {
                $('#model').append(
                    `<option value=${car}>${car}</option>`
                )
            })
        } else if (car == 'bmw'){
            bmwModels.map(car => {
                $('#model').append(
                    `<option value=${car}>${car}</option>`
                )
            })
        } else if (car == "chevrolet"){
            chevroletModels.map(car => {
                $('#model').append(
                    `<option value=${car}>${car}</option>`
                )
            })
        }
    });

    $('#searchModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    $('#cars-grid').on('click', () => {
        console.log('hello')
        $('.cards-area').addClass("card-deck")
    })

    $('#cars-rows').on('click', () => {
        console.log('goodbye')
        $('.cards-area').removeClass('card-deck')
    })

    $('#submitModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })




});

