# Offer management

APIs for managing offers.

## Display a listing of the offers in the system.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas"
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
<form id="form-GETapi-ofertas" data-method="GET" data-path="api/ofertas" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-ofertas', this);">
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


## Store a newly created offer.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas"
);

let headers = {
    "Authorization": "Bearer JWT_token",
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
<form id="form-POSTapi-ofertas" data-method="POST" data-path="api/ofertas" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-ofertas', this);">
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


## Display the specified offer.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas/2"
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
<form id="form-GETapi-ofertas--oferta-" data-method="GET" data-path="api/ofertas/{oferta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-ofertas--oferta-', this);">
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
<b><code>oferta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="oferta" data-endpoint="GETapi-ofertas--oferta-" data-component="url" required  hidden>
<br>
id of the game you are about to offer to show.</p>
</form>


## Update the offer status

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertas/perferendis"
);

let headers = {
    "Authorization": "Bearer JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idOferta": 2,
    "estado": "aceptada"
}

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
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
<form id="form-PUTapi-ofertas--oferta-" data-method="PUT" data-path="api/ofertas/{oferta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('PUTapi-ofertas--oferta-', this);">
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
<p>
<b><code>cuenta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="cuenta" data-endpoint="PUTapi-ofertas--oferta-" data-component="url" required  hidden>
<br>
id of the account that sent the offers, and wants to consult them.</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>idOferta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="idOferta" data-endpoint="PUTapi-ofertas--oferta-" data-component="body" required  hidden>
<br>
id of the offer that you want to update</p>
<p>
<b><code>estado</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="estado" data-endpoint="PUTapi-ofertas--oferta-" data-component="body" required  hidden>
<br>
the new status of the offer, after being altered (1pendiente, aceptada, rechadaza, terminada).</p>

</form>


## Display the offers that an account has sent.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/ofertasEnviadas/quis"
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
<form id="form-GETapi-ofertasEnviadas--idCuentaEnviar-" data-method="GET" data-path="api/ofertasEnviadas/{idCuentaEnviar}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-ofertasEnviadas--idCuentaEnviar-', this);">
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
<p>
<b><code>cuenta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="cuenta" data-endpoint="GETapi-ofertasEnviadas--idCuentaEnviar-" data-component="url" required  hidden>
<br>
id of the account that sent the offers, and wants to consult them.</p>
</form>



