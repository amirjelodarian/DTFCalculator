<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <link rel="stylesheet" href="{{ asset('fontello/css/fontello.css') }}" />
        <link rel="stylesheet" href="{{ asset('fontawesome/fontawesome-free-5.14.0-web/css/all.min.css') }}" />
        <script src="{{ asset('js/app.js') }}" defer></script>

    </head>
    <body id="root">
        <script>
            window.reactInit ={
                film_pet_price: <?php echo $data[0]['film_pet_price'] ?>,
                color_price: <?php echo $data[0]['color_price'] ?>,
                sugar_price: <?php echo $data[0]['sugar_price'] ?>,
            }
        </script>
    </body>
</html>
