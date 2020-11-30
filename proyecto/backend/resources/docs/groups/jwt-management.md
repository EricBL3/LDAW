# JWT management

APIs for registering users and JWT authentication.

## Register a User.


This endpoint allows you to register a user in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/auth/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer + JWT_token",
};

let body = {
    "idRol": 8,
    "nombre": "quod",
    "correoCuenta": "est",
    "telefonoCuenta": "sequi"
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


> Example response (200):

```json

{
 "id": 1,
 "respuesta": "hola",
}
```
<div id="execution-results-POSTapi-auth-register" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-auth-register"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-auth-register"></code></pre>
</div>
<div id="execution-error-POSTapi-auth-register" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-auth-register"></code></pre>
</div>
<form id="form-POSTapi-auth-register" data-method="POST" data-path="api/auth/register" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json","Authorization":"Bearer + JWT_token"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-auth-register', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/auth/register</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>idRol</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="idRol" data-endpoint="POSTapi-auth-register" data-component="body" required  hidden>
<br>
id of the selected role (1 for admin, 2 for regular user).</p>
<p>
<b><code>nombre</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="nombre" data-endpoint="POSTapi-auth-register" data-component="body" required  hidden>
<br>
name of the person that is registering in the platform.</p>
<p>
<b><code>correoCuenta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="correoCuenta" data-endpoint="POSTapi-auth-register" data-component="body" required  hidden>
<br>
email that will be used for the new account.</p>
<p>
<b><code>telefonoCuenta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="telefonoCuenta" data-endpoint="POSTapi-auth-register" data-component="body" required  hidden>
<br>
phone of the person registering to the platform.</p>

</form>


## Get a JWT via given credentials.


This endpoint will return the JWT token needed to make any other request to the API.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/auth/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer + JWT_token",
};


fetch(url, {
    method: "POST",
    headers,
}).then(response => response.json());
```


<div id="execution-results-POSTapi-auth-login" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-auth-login"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-auth-login"></code></pre>
</div>
<div id="execution-error-POSTapi-auth-login" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-auth-login"></code></pre>
</div>
<form id="form-POSTapi-auth-login" data-method="POST" data-path="api/auth/login" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json","Authorization":"Bearer + JWT_token"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-auth-login', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/auth/login</code></b>
</p>
</form>


## Log the user out (Invalidate the token).

<small class="badge badge-darkred">requires authentication</small>

This endpoint will logout the user and invalidate the JWT token.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/auth/logout"
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


<div id="execution-results-POSTapi-auth-logout" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-auth-logout"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-auth-logout"></code></pre>
</div>
<div id="execution-error-POSTapi-auth-logout" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-auth-logout"></code></pre>
</div>
<form id="form-POSTapi-auth-logout" data-method="POST" data-path="api/auth/logout" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-auth-logout', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/auth/logout</code></b>
</p>
<p>
<label id="auth-POSTapi-auth-logout" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="POSTapi-auth-logout" data-component="header"></label>
</p>
</form>


## Refresh a token.

<small class="badge badge-darkred">requires authentication</small>

This endpoint will refresh the JWT token of the signed in user.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/auth/refresh"
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


<div id="execution-results-POSTapi-auth-refresh" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-auth-refresh"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-auth-refresh"></code></pre>
</div>
<div id="execution-error-POSTapi-auth-refresh" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-auth-refresh"></code></pre>
</div>
<form id="form-POSTapi-auth-refresh" data-method="POST" data-path="api/auth/refresh" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-auth-refresh', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/auth/refresh</code></b>
</p>
<p>
<label id="auth-POSTapi-auth-refresh" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="POSTapi-auth-refresh" data-component="header"></label>
</p>
</form>


## Get the authenticated User.

<small class="badge badge-darkred">requires authentication</small>

This endpoint will return the profile of the user that signed in to the application.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/auth/profile"
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


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```
<div id="execution-results-GETapi-auth-profile" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-auth-profile"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-auth-profile"></code></pre>
</div>
<div id="execution-error-GETapi-auth-profile" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-auth-profile"></code></pre>
</div>
<form id="form-GETapi-auth-profile" data-method="GET" data-path="api/auth/profile" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-auth-profile', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/auth/profile</code></b>
</p>
<p>
<label id="auth-GETapi-auth-profile" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="GETapi-auth-profile" data-component="header"></label>
</p>
</form>



