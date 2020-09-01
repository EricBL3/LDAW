<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jan Limpens</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<style>
  img{
    width: 20%;
    border-radius: 5%;
    border: 2px solid black;   
  }
</style>
<body>
    <a class="btn btn-primary" href="{{ url('/') }}">Regresar</a>

    <div class="text-center">
        <img src="/images/janfoto.jpg" class="img-fluid">
        <h2>Jan Limpens Gutiérrez</h2>
        <h3>A01704365</h3>
    </div>


    <div class="accordion col-md-6 mx-auto" id="accordionExample">
    <div class="card">
        <div class="card-header text-center" id="heading">
            <h3 class="mb-0">
                Mi experiencia en el desarrollo web

            </h3>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ¿Qué software y plataformas de control de versiones has utilizado?
                </button>
            </h2>
        </div>

        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                Como control de versiones he utilizado únicamente GitHub (usando GitBash).
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ¿Has utilizado alguna plataforma para gestión de tareas y proyectos? ¿cuál(es)?
                </button>
            </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                En equipos anteriores hemos utilizado Trello, aunque ultimamente he comenzado a usar Nortion, que en mi
                opinión es mucho mas completo y mas flexible. Aparte de estos dos, hemos utulizado plantillas de excel en las
                cuales te permitía insertar tareas con sus fechas limites, persona asignada, tiempo estimado y tiempo real.
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingThree">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                    data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    ¿Qué medios de comunicación has usado con tus compañeros de equipo y profesores?
                </button>
            </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                Con profesores he utilizao mas que nada Slack, Zoom, Microsoft Teams y Remind, para conversaciones mas formales y profesionales.
                En cuanto a trabajos en equipo hemos utilizado Discord, grupos de WhatsApp y correo electrónico.
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="heading4">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                    data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    ¿Has usado algún framework de desarrollo web? ¿cuál(es)?
                </button>
            </h2>
        </div>
        <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
            <div class="card-body">
                Hasta hace poco creía que usar bootstrap p materialize era considerado usar frameworks, pero despues de ver las
                definiciones formales y algunos ejemplos de frameworks, creo que no he usado minguno hasta la fecha. (He aprendido
                un poco de laravel estos días)
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="heading5">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                    data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    ¿Has usado algún framework/librería de frontend (JS. CSS, HTML)? ¿cuál(es)?
                </button>
            </h2>
        </div>
        <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
            <div class="card-body">
                En cuanto a librerías de frontend si he usado unas cuantas. La primera que usé fue Bootstrap para hacer un juego de
                trivia y unas páginas web sencillas. Despues aperendí a usa Materialize para hacer  el frontend de una página de
                gestion de inventarios.
            </div>
        </div>
    </div>
</div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</body>
</html>
