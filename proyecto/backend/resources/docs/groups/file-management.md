# File management

APIs for managing files.

## Upload a File.

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to upload a file in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/archivos/upload"
);

let headers = {
    "Authorization": "Bearer JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "file": "est"
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
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
<form id="form-POSTapi-archivos-upload" data-method="POST" data-path="api/archivos/upload" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-archivos-upload', this);">
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
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>file</code></b>&nbsp;&nbsp;<small>required</small>     <i>optional</i> &nbsp;
<input type="text" name="file" data-endpoint="POSTapi-archivos-upload" data-component="body"  hidden>
<br>
to store</p>

</form>


## Download a File.

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to download a file stored in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/archivos/dowload/dolor"
);

let headers = {
    "Authorization": "Bearer JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "sunt"
}

fetch(url, {
    method: "GET",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


> Example response (500):

```json
{
    "message": "The file \"E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\storage\\app\\Archivos\\dolor\" does not exist",
    "exception": "Symfony\\Component\\HttpFoundation\\File\\Exception\\FileNotFoundException",
    "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\http-foundation\\File\\File.php",
    "line": 36,
    "trace": [
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\http-foundation\\BinaryFileResponse.php",
            "line": 89,
            "function": "__construct",
            "class": "Symfony\\Component\\HttpFoundation\\File\\File",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\symfony\\http-foundation\\BinaryFileResponse.php",
            "line": 51,
            "function": "setFile",
            "class": "Symfony\\Component\\HttpFoundation\\BinaryFileResponse",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\ResponseFactory.php",
            "line": 165,
            "function": "__construct",
            "class": "Symfony\\Component\\HttpFoundation\\BinaryFileResponse",
            "type": "->"
        },
        {
            "file": "E:\\Escritorio\\Tec\\Semestre 5\\LDAW\\LDAW\\proyecto\\backend\\app\\Http\\Controllers\\ArchivoController.php",
            "line": 43,
            "function": "download",
            "class": "Illuminate\\Routing\\ResponseFactory",
            "type": "->"
        },
        {
            "function": "dowload",
            "class": "App\\Http\\Controllers\\ArchivoController",
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
<div id="execution-results-GETapi-archivos-dowload--ruta-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-archivos-dowload--ruta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-archivos-dowload--ruta-"></code></pre>
</div>
<div id="execution-error-GETapi-archivos-dowload--ruta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-archivos-dowload--ruta-"></code></pre>
</div>
<form id="form-GETapi-archivos-dowload--ruta-" data-method="GET" data-path="api/archivos/dowload/{ruta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-archivos-dowload--ruta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/archivos/dowload/{ruta}</code></b>
</p>
<p>
<label id="auth-GETapi-archivos-dowload--ruta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-archivos-dowload--ruta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>ruta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="ruta" data-endpoint="GETapi-archivos-dowload--ruta-" data-component="url" required  hidden>
<br>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>name</code></b>&nbsp;&nbsp;<small>of</small>     <i>optional</i> &nbsp;
<input type="text" name="name" data-endpoint="GETapi-archivos-dowload--ruta-" data-component="body"  hidden>
<br>
thte file required to dowload</p>

</form>



