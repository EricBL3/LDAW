# Game management

APIs for adding, consulting and deleting games.

## Show a specific game

<small class="badge badge-darkred">requires authentication</small>

Displays the specified game of a title.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/juego/listarJuegos/natus"
);

let headers = {
    "Authorization": "Bearer JWT_token",
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
 "idJuego": 1,
 "idTitulo": 1,
 "condiciones": "nuevo",
 "pathImagen: "Archivos/miImagen.png",
 "tituloRecibir1": "halo 5",
 "tituloRecibir2": "minecraft",
 "tituloRecibir3": "call of duty",
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
<form id="form-GETapi-juego-listarJuegos--idTitulo-" data-method="GET" data-path="api/juego/listarJuegos/{idTitulo}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-juego-listarJuegos--idTitulo-', this);">
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
<p>
<b><code>itTitulo</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="itTitulo" data-endpoint="GETapi-juego-listarJuegos--idTitulo-" data-component="url" required  hidden>
<br>
id to make the search of the titles.</p>
</form>


## Get my games

<small class="badge badge-darkred">requires authentication</small>

Display the specified games of an account.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/juego/misJuegos/1"
);

let headers = {
    "Authorization": "Bearer JWT_token",
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
        "idJuego": 1,
        "idTitulo": 6,
        "tituloRecibir1": "Synchronised system-worthy info-mediaries",
        "tituloRecibir2": "Multi-layered system-worthy contingency",
        "tituloRecibir3": "Future-proofed maximized blockchain",
        "urlImagen": "\/images\/imagen5.jpg",
        "pathImagen": "Archivos\/lRlGGlTfBis26JbagXb43JmY7i8L5g5KBu8suRxD.png",
        "idCuenta": 1,
        "nombreTitulo": "Adaptive multimedia website",
        "condiciones": "nuevo",
        "nombreConsola": "Nintendo switch"
    },
    {
        "idJuego": 2,
        "idTitulo": 1,
        "tituloRecibir1": "Synergistic value-added instructionset",
        "tituloRecibir2": "Up-sized client-driven artificialintelligence",
        "tituloRecibir3": "Streamlined homogeneous hardware",
        "urlImagen": "\/images\/imagen3.jpg",
        "pathImagen": "Archivos\/lXIPX6RhO5lI8vWxoUx7Dx4x9ob8SR9cEujyxL6t.png",
        "idCuenta": 1,
        "nombreTitulo": "Reverse-engineered hybrid instructionset",
        "condiciones": "f",
        "nombreConsola": "XboxOne"
    }
]
```
<div id="execution-results-GETapi-juego-misJuegos--idCuenta-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-juego-misJuegos--idCuenta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-juego-misJuegos--idCuenta-"></code></pre>
</div>
<div id="execution-error-GETapi-juego-misJuegos--idCuenta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-juego-misJuegos--idCuenta-"></code></pre>
</div>
<form id="form-GETapi-juego-misJuegos--idCuenta-" data-method="GET" data-path="api/juego/misJuegos/{idCuenta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-juego-misJuegos--idCuenta-', this);">
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
<b><code>idCuenta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="idCuenta" data-endpoint="GETapi-juego-misJuegos--idCuenta-" data-component="url" required  hidden>
<br>
string to make the search of the titles.</p>
</form>


## Delete game

<small class="badge badge-darkred">requires authentication</small>

Delete an specified game of the systme.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/juego/borrarJuego/temporibus"
);

let headers = {
    "Authorization": "Bearer JWT_token",
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
<form id="form-DELETEapi-juego-borrarJuego--idJuego-" data-method="DELETE" data-path="api/juego/borrarJuego/{idJuego}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('DELETEapi-juego-borrarJuego--idJuego-', this);">
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
<p>
<b><code>idjuego</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="idjuego" data-endpoint="DELETEapi-juego-borrarJuego--idJuego-" data-component="url" required  hidden>
<br>
int to make the removal of the game.</p>
</form>


## Register game

<small class="badge badge-darkred">requires authentication</small>

Register a game in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/juego/registrarJuego/doloremque"
);

let headers = {
    "Authorization": "Bearer JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "condiciones": 12,
    "urlImagen": "sed",
    "correoCuenta": "corrupti",
    "telefonoCuenta": "consectetur"
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


<div id="execution-results-POSTapi-juego-registrarJuego--idCuenta-" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-juego-registrarJuego--idCuenta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-juego-registrarJuego--idCuenta-"></code></pre>
</div>
<div id="execution-error-POSTapi-juego-registrarJuego--idCuenta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-juego-registrarJuego--idCuenta-"></code></pre>
</div>
<form id="form-POSTapi-juego-registrarJuego--idCuenta-" data-method="POST" data-path="api/juego/registrarJuego/{idCuenta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-juego-registrarJuego--idCuenta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/juego/registrarJuego/{idCuenta}</code></b>
</p>
<p>
<label id="auth-POSTapi-juego-registrarJuego--idCuenta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="POSTapi-juego-registrarJuego--idCuenta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>idCuenta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="idCuenta" data-endpoint="POSTapi-juego-registrarJuego--idCuenta-" data-component="url" required  hidden>
<br>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>condiciones</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="condiciones" data-endpoint="POSTapi-juego-registrarJuego--idCuenta-" data-component="body" required  hidden>
<br>
id of the selected role (1 for admin, 2 for regular user).</p>
<p>
<b><code>urlImagen</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="urlImagen" data-endpoint="POSTapi-juego-registrarJuego--idCuenta-" data-component="body" required  hidden>
<br>
name of the person that is registering in the platform.</p>
<p>
<b><code>correoCuenta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="correoCuenta" data-endpoint="POSTapi-juego-registrarJuego--idCuenta-" data-component="body" required  hidden>
<br>
email that will be used for the new account.</p>
<p>
<b><code>telefonoCuenta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="telefonoCuenta" data-endpoint="POSTapi-juego-registrarJuego--idCuenta-" data-component="body" required  hidden>
<br>
phone of the person registering to the platform.</p>

</form>



