# Title management

APIs for consulting titles.

## Get filter titles

<small class="badge badge-darkred">requires authentication</small>

Display the specified titles under the search parameter.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/titulo/getTitulo/enim"
);

let headers = {
    "Authorization": "Bearer JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "busqueda": "explicabo"
}

fetch(url, {
    method: "GET",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


> Example response (200):

```json

{
 "idTitulo": 1,
 "nombreTitulo": "",
 "nombreGenero": "",
 "nombreDesarrollador: "",
 "nombrePublisher": "",
 "nombreConsola": "",
 "urlImagen": "",
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
<form id="form-GETapi-titulo-getTitulo--titulo--" data-method="GET" data-path="api/titulo/getTitulo/{titulo?}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-titulo-getTitulo--titulo--', this);">
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
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>busqueda</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="busqueda" data-endpoint="GETapi-titulo-getTitulo--titulo--" data-component="body" required  hidden>
<br>
string to make the search of the titles.</p>

</form>


## Get title

<small class="badge badge-darkred">requires authentication</small>

Display the specified title.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/titulo/mostrarTitulo/suscipit"
);

let headers = {
    "Authorization": "Bearer JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idTitulo": 4
}

fetch(url, {
    method: "GET",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


> Example response (200):

```json

{
 "idTitulo": 1,
 "nombreTitulo": "",
 "edicion": "",
 "version": "",
 "urlImagen": "",
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
<form id="form-GETapi-titulo-mostrarTitulo--idTitulo-" data-method="GET" data-path="api/titulo/mostrarTitulo/{idTitulo}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-titulo-mostrarTitulo--idTitulo-', this);">
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
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>idTitulo</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="idTitulo" data-endpoint="GETapi-titulo-mostrarTitulo--idTitulo-" data-component="body" required  hidden>
<br>
id of the selected title.</p>

</form>


## Get titles.

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to retrive all the titles in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/titulo/getTitulos"
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
        "idTitulo": 1,
        "nombreTitulo": "Reverse-engineered hybrid instructionset"
    },
    {
        "idTitulo": 2,
        "nombreTitulo": "Future-proofed maximized blockchain"
    },
    {
        "idTitulo": 3,
        "nombreTitulo": "Pre-emptive incremental openarchitecture"
    },
    {
        "idTitulo": 4,
        "nombreTitulo": "Synergistic value-added instructionset"
    },
    {
        "idTitulo": 5,
        "nombreTitulo": "Up-sized client-driven artificialintelligence"
    },
    {
        "idTitulo": 6,
        "nombreTitulo": "Adaptive multimedia website"
    },
    {
        "idTitulo": 7,
        "nombreTitulo": "Versatile local task-force"
    },
    {
        "idTitulo": 8,
        "nombreTitulo": "Pre-emptive real-time middleware"
    },
    {
        "idTitulo": 9,
        "nombreTitulo": "Managed real-time GraphicalUserInterface"
    },
    {
        "idTitulo": 10,
        "nombreTitulo": "Synchronised motivating knowledgebase"
    },
    {
        "idTitulo": 11,
        "nombreTitulo": "Multi-lateral assymetric moratorium"
    },
    {
        "idTitulo": 12,
        "nombreTitulo": "Streamlined homogeneous hardware"
    },
    {
        "idTitulo": 13,
        "nombreTitulo": "Triple-buffered bottom-line utilisation"
    },
    {
        "idTitulo": 14,
        "nombreTitulo": "Advanced secondary superstructure"
    },
    {
        "idTitulo": 15,
        "nombreTitulo": "Profit-focused global neural-net"
    },
    {
        "idTitulo": 16,
        "nombreTitulo": "Upgradable discrete monitoring"
    },
    {
        "idTitulo": 17,
        "nombreTitulo": "Vision-oriented global toolset"
    },
    {
        "idTitulo": 18,
        "nombreTitulo": "Synchronised system-worthy info-mediaries"
    },
    {
        "idTitulo": 19,
        "nombreTitulo": "Multi-layered system-worthy contingency"
    },
    {
        "idTitulo": 20,
        "nombreTitulo": "Multi-tiered eco-centric blockchain"
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
<form id="form-GETapi-titulo-getTitulos" data-method="GET" data-path="api/titulo/getTitulos" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-titulo-getTitulos', this);">
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



