# Endpoints


## api/titulo/getTitulo/{titulo?}

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/titulo/getTitulo/quia"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (500):

```json
{
    "message": "Undefined offset: 1",
    "exception": "ErrorException",
    "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\app\\Http\\Controllers\\TituloController.php",
    "line": 100,
    "trace": [
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\app\\Http\\Controllers\\TituloController.php",
            "line": 100,
            "function": "handleError",
            "class": "Illuminate\\Foundation\\Bootstrap\\HandleExceptions",
            "type": "->"
        },
        {
            "function": "getTitulo",
            "class": "App\\Http\\Controllers\\TituloController",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
            "line": 54,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php",
            "line": 45,
            "function": "callAction",
            "class": "Illuminate\\Routing\\Controller",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 255,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\ControllerDispatcher",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 197,
            "function": "runController",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 691,
            "function": "run",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\SubstituteBindings.php",
            "line": 41,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\SubstituteBindings",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 127,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 103,
            "function": "handleRequest",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 55,
            "function": "handleRequestUsingNamedLimiter",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 693,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 668,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 634,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 623,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 166,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance.php",
            "line": 87,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fruitcake\\laravel-cors\\src\\HandleCors.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fruitcake\\Cors\\HandleCors",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fideloper\\proxy\\src\\TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 141,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 110,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 324,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 305,
            "function": "callLaravelOrLumenRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 76,
            "function": "makeApiCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 51,
            "function": "makeResponseCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 41,
            "function": "makeResponseCallIfEnabledAndNoSuccessResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 236,
            "function": "__invoke",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 172,
            "function": "iterateThroughStrategies",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 127,
            "function": "fetchResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 118,
            "function": "processRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 73,
            "function": "processRoutes",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 37,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php",
            "line": 40,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 95,
            "function": "unwrapIfClosure",
            "class": "Illuminate\\Container\\Util",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 39,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php",
            "line": 596,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 136,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Command\\Command.php",
            "line": 258,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 121,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 920,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 266,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 142,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php",
            "line": 93,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php",
            "line": 129,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```
<div id="execution-results-GETapi-titulo-getTitulo--titulo--" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-titulo-getTitulo--titulo--"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-titulo-getTitulo--titulo--"></code></pre>
</div>
<div id="execution-error-GETapi-titulo-getTitulo--titulo--" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-titulo-getTitulo--titulo--"></code></pre>
</div>
<form id="form-GETapi-titulo-getTitulo--titulo--" data-method="GET" data-path="api/titulo/getTitulo/{titulo?}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-titulo-getTitulo--titulo--', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/titulo/getTitulo/{titulo?}</code></b>
</p>
<p>
<label id="auth-GETapi-titulo-getTitulo--titulo--" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-titulo-getTitulo--titulo--" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>titulo</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
<input type="text" name="titulo" data-endpoint="GETapi-titulo-getTitulo--titulo--" data-component="url"  hidden>
<br>
</p>
</form>


## api/titulo/getData

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/titulo/getData"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
[
    {
        "idTitulo": 1,
        "nombreTitulo": "De-engineered executive knowledgeuser",
        "urlImagen": "\/images\/imagen3.jpg",
        "nombreGenero": "Deportes",
        "nombreDesarrollador": "Bethesda",
        "nombrePublisher": "Nintendo",
        "nombreConsola": "PlayStation5"
    },
    {
        "idTitulo": 2,
        "nombreTitulo": "Implemented directional processimprovement",
        "urlImagen": "\/images\/imagen1.jpg",
        "nombreGenero": "Aventura",
        "nombreDesarrollador": "Bethesda",
        "nombrePublisher": "Capcom",
        "nombreConsola": "XboxOne"
    },
    {
        "idTitulo": 3,
        "nombreTitulo": "Self-enabling holistic contingency",
        "urlImagen": "\/images\/imagen2.jpg",
        "nombreGenero": "Miedo",
        "nombreDesarrollador": "RockStar games",
        "nombrePublisher": "Bioware",
        "nombreConsola": "Xbox360"
    },
    {
        "idTitulo": 4,
        "nombreTitulo": "Persistent optimal firmware",
        "urlImagen": "\/images\/imagen2.jpg",
        "nombreGenero": "Deportes",
        "nombreDesarrollador": "Bethesda",
        "nombrePublisher": "SEGA",
        "nombreConsola": "PlayStation5"
    },
    {
        "idTitulo": 6,
        "nombreTitulo": "Cross-group exuding knowledgebase",
        "urlImagen": "\/images\/imagen3.jpg",
        "nombreGenero": "Plataformas",
        "nombreDesarrollador": "Frostbite",
        "nombrePublisher": "Nintendo",
        "nombreConsola": "SeriesX"
    },
    {
        "idTitulo": 8,
        "nombreTitulo": "Quality-focused 24\/7 extranet",
        "urlImagen": "\/images\/imagen4.jpg",
        "nombreGenero": "Plataformas",
        "nombreDesarrollador": "Crytek",
        "nombrePublisher": "Sony",
        "nombreConsola": "PlayStation5"
    },
    {
        "idTitulo": 12,
        "nombreTitulo": "Customer-focused 3rdgeneration contingency",
        "urlImagen": "\/images\/imagen2.jpg",
        "nombreGenero": "Aventura",
        "nombreDesarrollador": "Crytek",
        "nombrePublisher": "Electronic Arts",
        "nombreConsola": "XboxOne"
    },
    {
        "idTitulo": 13,
        "nombreTitulo": "User-friendly foreground projection",
        "urlImagen": "\/images\/imagen3.jpg",
        "nombreGenero": "Plataformas",
        "nombreDesarrollador": "RockStar games",
        "nombrePublisher": "Activision Blizzard",
        "nombreConsola": "Xbox360"
    },
    {
        "idTitulo": 14,
        "nombreTitulo": "Phased 4thgeneration intranet",
        "urlImagen": "\/images\/imagen5.jpg",
        "nombreGenero": "Aventura",
        "nombreDesarrollador": "Bethesda",
        "nombrePublisher": "Bioware",
        "nombreConsola": "XboxOne"
    },
    {
        "idTitulo": 15,
        "nombreTitulo": "Fundamental zeroadministration alliance",
        "urlImagen": "\/images\/imagen4.jpg",
        "nombreGenero": "RPG",
        "nombreDesarrollador": "havok",
        "nombrePublisher": "Electronic Arts",
        "nombreConsola": "PlayStation4"
    },
    {
        "idTitulo": 16,
        "nombreTitulo": "Multi-lateral zerodefect knowledgebase",
        "urlImagen": "\/images\/imagen2.jpg",
        "nombreGenero": "Plataformas",
        "nombreDesarrollador": "RockStar games",
        "nombrePublisher": "SEGA",
        "nombreConsola": "Xbox360"
    },
    {
        "idTitulo": 17,
        "nombreTitulo": "Customer-focused motivating contingency",
        "urlImagen": "\/images\/imagen5.jpg",
        "nombreGenero": "RPG",
        "nombreDesarrollador": "From Software",
        "nombrePublisher": "Ubisoft",
        "nombreConsola": "Xbox360"
    },
    {
        "idTitulo": 18,
        "nombreTitulo": "Ergonomic content-based throughput",
        "urlImagen": "\/images\/imagen1.jpg",
        "nombreGenero": "Estrategia",
        "nombreDesarrollador": "Frostbite",
        "nombrePublisher": "Bioware",
        "nombreConsola": "SeriesX"
    },
    {
        "idTitulo": 19,
        "nombreTitulo": "Inverse systematic challenge",
        "urlImagen": "\/images\/imagen1.jpg",
        "nombreGenero": "Plataformas",
        "nombreDesarrollador": "From Software",
        "nombrePublisher": "Bioware",
        "nombreConsola": "XboxOne"
    },
    {
        "idTitulo": 20,
        "nombreTitulo": "Persevering radical matrices",
        "urlImagen": "\/images\/imagen1.jpg",
        "nombreGenero": "Aventura",
        "nombreDesarrollador": "Activision",
        "nombrePublisher": "SEGA",
        "nombreConsola": "PlayStation5"
    }
]
```
<div id="execution-results-GETapi-titulo-getData" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-titulo-getData"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-titulo-getData"></code></pre>
</div>
<div id="execution-error-GETapi-titulo-getData" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-titulo-getData"></code></pre>
</div>
<form id="form-GETapi-titulo-getData" data-method="GET" data-path="api/titulo/getData" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-titulo-getData', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/titulo/getData</code></b>
</p>
<p>
<label id="auth-GETapi-titulo-getData" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-titulo-getData" data-component="header"></label>
</p>
</form>


## api/titulo/mostrarTitulo/{idTitulo}

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/titulo/mostrarTitulo/consectetur"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (500):

```json
{
    "message": "Argument 1 passed to App\\Http\\Controllers\\TituloController::mostrarTitulo() must be of the type int, string given",
    "exception": "TypeError",
    "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\app\\Http\\Controllers\\TituloController.php",
    "line": 146,
    "trace": [
        {
            "function": "mostrarTitulo",
            "class": "App\\Http\\Controllers\\TituloController",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
            "line": 54,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php",
            "line": 45,
            "function": "callAction",
            "class": "Illuminate\\Routing\\Controller",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 255,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\ControllerDispatcher",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 197,
            "function": "runController",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 691,
            "function": "run",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\SubstituteBindings.php",
            "line": 41,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\SubstituteBindings",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 127,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 103,
            "function": "handleRequest",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 55,
            "function": "handleRequestUsingNamedLimiter",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 693,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 668,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 634,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 623,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 166,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance.php",
            "line": 87,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fruitcake\\laravel-cors\\src\\HandleCors.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fruitcake\\Cors\\HandleCors",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fideloper\\proxy\\src\\TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 141,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 110,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 324,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 305,
            "function": "callLaravelOrLumenRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 76,
            "function": "makeApiCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 51,
            "function": "makeResponseCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 41,
            "function": "makeResponseCallIfEnabledAndNoSuccessResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 236,
            "function": "__invoke",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 172,
            "function": "iterateThroughStrategies",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 127,
            "function": "fetchResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 118,
            "function": "processRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 73,
            "function": "processRoutes",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 37,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php",
            "line": 40,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 95,
            "function": "unwrapIfClosure",
            "class": "Illuminate\\Container\\Util",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 39,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php",
            "line": 596,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 136,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Command\\Command.php",
            "line": 258,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 121,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 920,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 266,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 142,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php",
            "line": 93,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php",
            "line": 129,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```
<div id="execution-results-GETapi-titulo-mostrarTitulo--idTitulo-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-titulo-mostrarTitulo--idTitulo-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-titulo-mostrarTitulo--idTitulo-"></code></pre>
</div>
<div id="execution-error-GETapi-titulo-mostrarTitulo--idTitulo-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-titulo-mostrarTitulo--idTitulo-"></code></pre>
</div>
<form id="form-GETapi-titulo-mostrarTitulo--idTitulo-" data-method="GET" data-path="api/titulo/mostrarTitulo/{idTitulo}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-titulo-mostrarTitulo--idTitulo-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/titulo/mostrarTitulo/{idTitulo}</code></b>
</p>
<p>
<label id="auth-GETapi-titulo-mostrarTitulo--idTitulo-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-titulo-mostrarTitulo--idTitulo-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>idTitulo</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="idTitulo" data-endpoint="GETapi-titulo-mostrarTitulo--idTitulo-" data-component="url" required  hidden>
<br>
</p>
</form>


## api/titulo/getTitulos

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/titulo/getTitulos"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
[
    {
        "idTitulo": 1,
        "nombreTitulo": "De-engineered executive knowledgeuser"
    },
    {
        "idTitulo": 2,
        "nombreTitulo": "Implemented directional processimprovement"
    },
    {
        "idTitulo": 3,
        "nombreTitulo": "Self-enabling holistic contingency"
    },
    {
        "idTitulo": 4,
        "nombreTitulo": "Persistent optimal firmware"
    },
    {
        "idTitulo": 5,
        "nombreTitulo": "Automated empowering emulation"
    },
    {
        "idTitulo": 6,
        "nombreTitulo": "Cross-group exuding knowledgebase"
    },
    {
        "idTitulo": 7,
        "nombreTitulo": "Compatible foreground help-desk"
    },
    {
        "idTitulo": 8,
        "nombreTitulo": "Quality-focused 24\/7 extranet"
    },
    {
        "idTitulo": 9,
        "nombreTitulo": "Reverse-engineered object-oriented moderator"
    },
    {
        "idTitulo": 10,
        "nombreTitulo": "Ergonomic national workforce"
    },
    {
        "idTitulo": 11,
        "nombreTitulo": "Optimized multimedia concept"
    },
    {
        "idTitulo": 12,
        "nombreTitulo": "Customer-focused 3rdgeneration contingency"
    },
    {
        "idTitulo": 13,
        "nombreTitulo": "User-friendly foreground projection"
    },
    {
        "idTitulo": 14,
        "nombreTitulo": "Phased 4thgeneration intranet"
    },
    {
        "idTitulo": 15,
        "nombreTitulo": "Fundamental zeroadministration alliance"
    },
    {
        "idTitulo": 16,
        "nombreTitulo": "Multi-lateral zerodefect knowledgebase"
    },
    {
        "idTitulo": 17,
        "nombreTitulo": "Customer-focused motivating contingency"
    },
    {
        "idTitulo": 18,
        "nombreTitulo": "Ergonomic content-based throughput"
    },
    {
        "idTitulo": 19,
        "nombreTitulo": "Inverse systematic challenge"
    },
    {
        "idTitulo": 20,
        "nombreTitulo": "Persevering radical matrices"
    }
]
```
<div id="execution-results-GETapi-titulo-getTitulos" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-titulo-getTitulos"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-titulo-getTitulos"></code></pre>
</div>
<div id="execution-error-GETapi-titulo-getTitulos" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-titulo-getTitulos"></code></pre>
</div>
<form id="form-GETapi-titulo-getTitulos" data-method="GET" data-path="api/titulo/getTitulos" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-titulo-getTitulos', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/titulo/getTitulos</code></b>
</p>
<p>
<label id="auth-GETapi-titulo-getTitulos" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-titulo-getTitulos" data-component="header"></label>
</p>
</form>


## api/juego/listarJuegos/{idTitulo}

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/juego/listarJuegos/omnis"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (500):

```json
{
    "message": "Argument 1 passed to App\\Http\\Controllers\\JuegoController::listarJuegos() must be of the type int, string given",
    "exception": "TypeError",
    "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\app\\Http\\Controllers\\JuegoController.php",
    "line": 66,
    "trace": [
        {
            "function": "listarJuegos",
            "class": "App\\Http\\Controllers\\JuegoController",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
            "line": 54,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php",
            "line": 45,
            "function": "callAction",
            "class": "Illuminate\\Routing\\Controller",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 255,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\ControllerDispatcher",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 197,
            "function": "runController",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 691,
            "function": "run",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\SubstituteBindings.php",
            "line": 41,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\SubstituteBindings",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 127,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 103,
            "function": "handleRequest",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 55,
            "function": "handleRequestUsingNamedLimiter",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 693,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 668,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 634,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 623,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 166,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance.php",
            "line": 87,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fruitcake\\laravel-cors\\src\\HandleCors.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fruitcake\\Cors\\HandleCors",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fideloper\\proxy\\src\\TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 141,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 110,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 324,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 305,
            "function": "callLaravelOrLumenRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 76,
            "function": "makeApiCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 51,
            "function": "makeResponseCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 41,
            "function": "makeResponseCallIfEnabledAndNoSuccessResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 236,
            "function": "__invoke",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 172,
            "function": "iterateThroughStrategies",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 127,
            "function": "fetchResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 118,
            "function": "processRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 73,
            "function": "processRoutes",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 37,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php",
            "line": 40,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 95,
            "function": "unwrapIfClosure",
            "class": "Illuminate\\Container\\Util",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 39,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php",
            "line": 596,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 136,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Command\\Command.php",
            "line": 258,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 121,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 920,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 266,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 142,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php",
            "line": 93,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php",
            "line": 129,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```
<div id="execution-results-GETapi-juego-listarJuegos--idTitulo-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-juego-listarJuegos--idTitulo-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-juego-listarJuegos--idTitulo-"></code></pre>
</div>
<div id="execution-error-GETapi-juego-listarJuegos--idTitulo-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-juego-listarJuegos--idTitulo-"></code></pre>
</div>
<form id="form-GETapi-juego-listarJuegos--idTitulo-" data-method="GET" data-path="api/juego/listarJuegos/{idTitulo}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-juego-listarJuegos--idTitulo-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/juego/listarJuegos/{idTitulo}</code></b>
</p>
<p>
<label id="auth-GETapi-juego-listarJuegos--idTitulo-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-juego-listarJuegos--idTitulo-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>idTitulo</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="idTitulo" data-endpoint="GETapi-juego-listarJuegos--idTitulo-" data-component="url" required  hidden>
<br>
</p>
</form>


## api/juego/misJuegos/{idCuenta}

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/juego/misJuegos/laudantium"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (500):

```json
{
    "message": "Argument 1 passed to App\\Http\\Controllers\\JuegoController::misJuegos() must be of the type int, string given",
    "exception": "TypeError",
    "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\app\\Http\\Controllers\\JuegoController.php",
    "line": 72,
    "trace": [
        {
            "function": "misJuegos",
            "class": "App\\Http\\Controllers\\JuegoController",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
            "line": 54,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ControllerDispatcher.php",
            "line": 45,
            "function": "callAction",
            "class": "Illuminate\\Routing\\Controller",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 255,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\ControllerDispatcher",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php",
            "line": 197,
            "function": "runController",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 691,
            "function": "run",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\SubstituteBindings.php",
            "line": 41,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\SubstituteBindings",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 127,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 103,
            "function": "handleRequest",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Middleware\\ThrottleRequests.php",
            "line": 55,
            "function": "handleRequestUsingNamedLimiter",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 693,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 668,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 634,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php",
            "line": 623,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 166,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 128,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest.php",
            "line": 21,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance.php",
            "line": 87,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fruitcake\\laravel-cors\\src\\HandleCors.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fruitcake\\Cors\\HandleCors",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\fideloper\\proxy\\src\\TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 167,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Pipeline\\Pipeline.php",
            "line": 103,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 141,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php",
            "line": 110,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 324,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 305,
            "function": "callLaravelOrLumenRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 76,
            "function": "makeApiCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 51,
            "function": "makeResponseCall",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Strategies\\Responses\\ResponseCalls.php",
            "line": 41,
            "function": "makeResponseCallIfEnabledAndNoSuccessResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 236,
            "function": "__invoke",
            "class": "Knuckles\\Scribe\\Extracting\\Strategies\\Responses\\ResponseCalls",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 172,
            "function": "iterateThroughStrategies",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Extracting\\Generator.php",
            "line": 127,
            "function": "fetchResponses",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 118,
            "function": "processRoute",
            "class": "Knuckles\\Scribe\\Extracting\\Generator",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\knuckleswtf\\scribe\\src\\Commands\\GenerateDocumentation.php",
            "line": 73,
            "function": "processRoutes",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Knuckles\\Scribe\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 37,
            "function": "call_user_func_array"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Util.php",
            "line": 40,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 95,
            "function": "unwrapIfClosure",
            "class": "Illuminate\\Container\\Util",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\BoundMethod.php",
            "line": 39,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Container\\Container.php",
            "line": 596,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 136,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Command\\Command.php",
            "line": 258,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Command.php",
            "line": 121,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 920,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 266,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\console\\Application.php",
            "line": 142,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Console\\Application.php",
            "line": 93,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Console\\Kernel.php",
            "line": 129,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```
<div id="execution-results-GETapi-juego-misJuegos--idCuenta-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-juego-misJuegos--idCuenta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-juego-misJuegos--idCuenta-"></code></pre>
</div>
<div id="execution-error-GETapi-juego-misJuegos--idCuenta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-juego-misJuegos--idCuenta-"></code></pre>
</div>
<form id="form-GETapi-juego-misJuegos--idCuenta-" data-method="GET" data-path="api/juego/misJuegos/{idCuenta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-juego-misJuegos--idCuenta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/juego/misJuegos/{idCuenta}</code></b>
</p>
<p>
<label id="auth-GETapi-juego-misJuegos--idCuenta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-juego-misJuegos--idCuenta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>idCuenta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="idCuenta" data-endpoint="GETapi-juego-misJuegos--idCuenta-" data-component="url" required  hidden>
<br>
</p>
</form>


## api/juego/borrarJuego/{idJuego}

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/juego/borrarJuego/et"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response => response.json());
```


<div id="execution-results-DELETEapi-juego-borrarJuego--idJuego-" hidden>
    <blockquote>Received response<span id="execution-response-status-DELETEapi-juego-borrarJuego--idJuego-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-juego-borrarJuego--idJuego-"></code></pre>
</div>
<div id="execution-error-DELETEapi-juego-borrarJuego--idJuego-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-juego-borrarJuego--idJuego-"></code></pre>
</div>
<form id="form-DELETEapi-juego-borrarJuego--idJuego-" data-method="DELETE" data-path="api/juego/borrarJuego/{idJuego}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('DELETEapi-juego-borrarJuego--idJuego-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-red">DELETE</small>
 <b><code>api/juego/borrarJuego/{idJuego}</code></b>
</p>
<p>
<label id="auth-DELETEapi-juego-borrarJuego--idJuego-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="DELETEapi-juego-borrarJuego--idJuego-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>idJuego</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="idJuego" data-endpoint="DELETEapi-juego-borrarJuego--idJuego-" data-component="url" required  hidden>
<br>
</p>
</form>


## api/genero/getGenero

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/genero/getGenero"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
[
    {
        "idGenero": 1,
        "nombreGenero": "Acción"
    },
    {
        "idGenero": 2,
        "nombreGenero": "Aventura"
    },
    {
        "idGenero": 3,
        "nombreGenero": "Plataformas"
    },
    {
        "idGenero": 4,
        "nombreGenero": "Miedo"
    },
    {
        "idGenero": 5,
        "nombreGenero": "Deportes"
    },
    {
        "idGenero": 6,
        "nombreGenero": "RPG"
    },
    {
        "idGenero": 7,
        "nombreGenero": "Estrategia"
    }
]
```
<div id="execution-results-GETapi-genero-getGenero" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-genero-getGenero"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-genero-getGenero"></code></pre>
</div>
<div id="execution-error-GETapi-genero-getGenero" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-genero-getGenero"></code></pre>
</div>
<form id="form-GETapi-genero-getGenero" data-method="GET" data-path="api/genero/getGenero" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-genero-getGenero', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/genero/getGenero</code></b>
</p>
<p>
<label id="auth-GETapi-genero-getGenero" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-genero-getGenero" data-component="header"></label>
</p>
</form>


## api/consola/getConsola

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/consola/getConsola"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
[
    {
        "idConsola": 1,
        "nombreConsola": "Xbox360"
    },
    {
        "idConsola": 2,
        "nombreConsola": "XboxOne"
    },
    {
        "idConsola": 3,
        "nombreConsola": "PlayStation4"
    },
    {
        "idConsola": 4,
        "nombreConsola": "PlayStation5"
    },
    {
        "idConsola": 5,
        "nombreConsola": "Nintendo switch"
    },
    {
        "idConsola": 6,
        "nombreConsola": "SeriesX"
    }
]
```
<div id="execution-results-GETapi-consola-getConsola" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-consola-getConsola"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-consola-getConsola"></code></pre>
</div>
<div id="execution-error-GETapi-consola-getConsola" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-consola-getConsola"></code></pre>
</div>
<form id="form-GETapi-consola-getConsola" data-method="GET" data-path="api/consola/getConsola" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-consola-getConsola', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/consola/getConsola</code></b>
</p>
<p>
<label id="auth-GETapi-consola-getConsola" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-consola-getConsola" data-component="header"></label>
</p>
</form>


## api/publisher/getPublisher

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/publisher/getPublisher"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
[
    {
        "idPublisher": 1,
        "nombrePublisher": "Nintendo"
    },
    {
        "idPublisher": 2,
        "nombrePublisher": "2k"
    },
    {
        "idPublisher": 3,
        "nombrePublisher": "Bungie"
    },
    {
        "idPublisher": 4,
        "nombrePublisher": "Microsoft"
    },
    {
        "idPublisher": 5,
        "nombrePublisher": "Activision Blizzard"
    },
    {
        "idPublisher": 6,
        "nombrePublisher": "Electronic Arts"
    },
    {
        "idPublisher": 7,
        "nombrePublisher": "Sony"
    },
    {
        "idPublisher": 8,
        "nombrePublisher": "SEGA"
    },
    {
        "idPublisher": 9,
        "nombrePublisher": "Bioware"
    },
    {
        "idPublisher": 10,
        "nombrePublisher": "Ubisoft"
    },
    {
        "idPublisher": 11,
        "nombrePublisher": "Capcom"
    },
    {
        "idPublisher": 12,
        "nombrePublisher": "Bandai Namco"
    },
    {
        "idPublisher": 13,
        "nombrePublisher": "Mojang"
    }
]
```
<div id="execution-results-GETapi-publisher-getPublisher" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-publisher-getPublisher"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-publisher-getPublisher"></code></pre>
</div>
<div id="execution-error-GETapi-publisher-getPublisher" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-publisher-getPublisher"></code></pre>
</div>
<form id="form-GETapi-publisher-getPublisher" data-method="GET" data-path="api/publisher/getPublisher" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-publisher-getPublisher', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/publisher/getPublisher</code></b>
</p>
<p>
<label id="auth-GETapi-publisher-getPublisher" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-publisher-getPublisher" data-component="header"></label>
</p>
</form>


## api/desarrollador/getDesarrollador

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/desarrollador/getDesarrollador"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
[
    {
        "idDesarrollador": 1,
        "nombreDesarrollador": "Activision"
    },
    {
        "idDesarrollador": 2,
        "nombreDesarrollador": "343 Industries"
    },
    {
        "idDesarrollador": 3,
        "nombreDesarrollador": "havok"
    },
    {
        "idDesarrollador": 4,
        "nombreDesarrollador": "RockStar games"
    },
    {
        "idDesarrollador": 5,
        "nombreDesarrollador": "From Software"
    },
    {
        "idDesarrollador": 6,
        "nombreDesarrollador": "Visceral"
    },
    {
        "idDesarrollador": 7,
        "nombreDesarrollador": "Bethesda"
    },
    {
        "idDesarrollador": 8,
        "nombreDesarrollador": "Crytek"
    },
    {
        "idDesarrollador": 9,
        "nombreDesarrollador": "Frostbite"
    }
]
```
<div id="execution-results-GETapi-desarrollador-getDesarrollador" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-desarrollador-getDesarrollador"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-desarrollador-getDesarrollador"></code></pre>
</div>
<div id="execution-error-GETapi-desarrollador-getDesarrollador" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-desarrollador-getDesarrollador"></code></pre>
</div>
<form id="form-GETapi-desarrollador-getDesarrollador" data-method="GET" data-path="api/desarrollador/getDesarrollador" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-desarrollador-getDesarrollador', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/desarrollador/getDesarrollador</code></b>
</p>
<p>
<label id="auth-GETapi-desarrollador-getDesarrollador" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-desarrollador-getDesarrollador" data-component="header"></label>
</p>
</form>


## api/archivos/upload

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/archivos/upload"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers,
}).then(response => response.json());
```


<div id="execution-results-POSTapi-archivos-upload" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-archivos-upload"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-archivos-upload"></code></pre>
</div>
<div id="execution-error-POSTapi-archivos-upload" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-archivos-upload"></code></pre>
</div>
<form id="form-POSTapi-archivos-upload" data-method="POST" data-path="api/archivos/upload" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-archivos-upload', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/archivos/upload</code></b>
</p>
<p>
<label id="auth-POSTapi-archivos-upload" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="POSTapi-archivos-upload" data-component="header"></label>
</p>
</form>


## api/archivos/dowload

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/archivos/dowload"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json

Hola
```
<div id="execution-results-GETapi-archivos-dowload" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-archivos-dowload"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-archivos-dowload"></code></pre>
</div>
<div id="execution-error-GETapi-archivos-dowload" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-archivos-dowload"></code></pre>
</div>
<form id="form-GETapi-archivos-dowload" data-method="GET" data-path="api/archivos/dowload" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-archivos-dowload', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/archivos/dowload</code></b>
</p>
<p>
<label id="auth-GETapi-archivos-dowload" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-archivos-dowload" data-component="header"></label>
</p>
</form>


## Display a listing of the resource.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
{
    "data": []
}
```
<div id="execution-results-GETapi-ofertas" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-ofertas"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-ofertas"></code></pre>
</div>
<div id="execution-error-GETapi-ofertas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-ofertas"></code></pre>
</div>
<form id="form-GETapi-ofertas" data-method="GET" data-path="api/ofertas" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-ofertas', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/ofertas</code></b>
</p>
<p>
<label id="auth-GETapi-ofertas" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-ofertas" data-component="header"></label>
</p>
</form>


## Store a newly created resource in storage.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers,
}).then(response => response.json());
```


<div id="execution-results-POSTapi-ofertas" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-ofertas"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-ofertas"></code></pre>
</div>
<div id="execution-error-POSTapi-ofertas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-ofertas"></code></pre>
</div>
<form id="form-POSTapi-ofertas" data-method="POST" data-path="api/ofertas" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-ofertas', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/ofertas</code></b>
</p>
<p>
<label id="auth-POSTapi-ofertas" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="POSTapi-ofertas" data-component="header"></label>
</p>
</form>


## Display the specified resource.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas/et"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json

[]
```
<div id="execution-results-GETapi-ofertas--oferta-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-ofertas--oferta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-ofertas--oferta-"></code></pre>
</div>
<div id="execution-error-GETapi-ofertas--oferta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-ofertas--oferta-"></code></pre>
</div>
<form id="form-GETapi-ofertas--oferta-" data-method="GET" data-path="api/ofertas/{oferta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-ofertas--oferta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/ofertas/{oferta}</code></b>
</p>
<p>
<label id="auth-GETapi-ofertas--oferta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-ofertas--oferta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>oferta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="oferta" data-endpoint="GETapi-ofertas--oferta-" data-component="url" required  hidden>
<br>
</p>
</form>


## Update the specified resource in storage.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas/fugit"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "PUT",
    headers,
}).then(response => response.json());
```


<div id="execution-results-PUTapi-ofertas--oferta-" hidden>
    <blockquote>Received response<span id="execution-response-status-PUTapi-ofertas--oferta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-ofertas--oferta-"></code></pre>
</div>
<div id="execution-error-PUTapi-ofertas--oferta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-ofertas--oferta-"></code></pre>
</div>
<form id="form-PUTapi-ofertas--oferta-" data-method="PUT" data-path="api/ofertas/{oferta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('PUTapi-ofertas--oferta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-darkblue">PUT</small>
 <b><code>api/ofertas/{oferta}</code></b>
</p>
<p>
<small class="badge badge-purple">PATCH</small>
 <b><code>api/ofertas/{oferta}</code></b>
</p>
<p>
<label id="auth-PUTapi-ofertas--oferta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="PUTapi-ofertas--oferta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>oferta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="oferta" data-endpoint="PUTapi-ofertas--oferta-" data-component="url" required  hidden>
<br>
</p>
</form>


## Remove the specified resource from storage.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas/animi"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response => response.json());
```


<div id="execution-results-DELETEapi-ofertas--oferta-" hidden>
    <blockquote>Received response<span id="execution-response-status-DELETEapi-ofertas--oferta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-ofertas--oferta-"></code></pre>
</div>
<div id="execution-error-DELETEapi-ofertas--oferta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-ofertas--oferta-"></code></pre>
</div>
<form id="form-DELETEapi-ofertas--oferta-" data-method="DELETE" data-path="api/ofertas/{oferta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('DELETEapi-ofertas--oferta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-red">DELETE</small>
 <b><code>api/ofertas/{oferta}</code></b>
</p>
<p>
<label id="auth-DELETEapi-ofertas--oferta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="DELETEapi-ofertas--oferta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>oferta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="oferta" data-endpoint="DELETEapi-ofertas--oferta-" data-component="url" required  hidden>
<br>
</p>
</form>


## api/ofertasEnviadas/{idCuentaEnviar}

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertasEnviadas/et"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json

[]
```
<div id="execution-results-GETapi-ofertasEnviadas--idCuentaEnviar-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-ofertasEnviadas--idCuentaEnviar-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-ofertasEnviadas--idCuentaEnviar-"></code></pre>
</div>
<div id="execution-error-GETapi-ofertasEnviadas--idCuentaEnviar-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-ofertasEnviadas--idCuentaEnviar-"></code></pre>
</div>
<form id="form-GETapi-ofertasEnviadas--idCuentaEnviar-" data-method="GET" data-path="api/ofertasEnviadas/{idCuentaEnviar}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-ofertasEnviadas--idCuentaEnviar-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/ofertasEnviadas/{idCuentaEnviar}</code></b>
</p>
<p>
<label id="auth-GETapi-ofertasEnviadas--idCuentaEnviar-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-ofertasEnviadas--idCuentaEnviar-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>idCuentaEnviar</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="idCuentaEnviar" data-endpoint="GETapi-ofertasEnviadas--idCuentaEnviar-" data-component="url" required  hidden>
<br>
</p>
</form>



