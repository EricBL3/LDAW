# Account management

APIs for retrieving and updating accounts.

## Display a listing of the accounts in the system.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/cuentas"
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
        "id": 2,
        "idRol": 1,
        "nombre": "Eric",
        "correoCuenta": "probando@gmail.com",
        "telefonoCuenta": "4424567890",
        "usuario": "eric_bl",
        "password": "$2y$10$s9NooSQu.W46DRhjXUeADOfJU60Du1\/bj\/pJGMpVl66K.hjaty7k2",
        "created_at": "2020-10-15 22:25:07",
        "updated_at": "2020-10-15 22:25:07",
        "remember_token": null,
        "nombreRol": "admin"
    },
    {
        "id": 14,
        "idRol": 1,
        "nombre": "prueba admin",
        "correoCuenta": "pruebaadmineditar@gmail.com",
        "telefonoCuenta": "1111111111",
        "usuario": "prueba_admin_editar",
        "password": "$2y$10$B\/o\/.CXLaM.Bo.MqrAmvQ.ryHyyA2FYWrZPAAqQWlpmXb9oSxYBoG",
        "created_at": "2020-11-25 04:00:21",
        "updated_at": "2020-11-25 19:55:20",
        "remember_token": null,
        "nombreRol": "admin"
    },
    {
        "id": 16,
        "idRol": 2,
        "nombre": "prueba general",
        "correoCuenta": "pruebageneral@gmail.com",
        "telefonoCuenta": "1234567890",
        "usuario": "general@gmail.com",
        "password": "$2y$10$TMbdelnCCVWw3ybJYe3SQe1W56DIjK1WxlvRQaJ.MZre5qeK9VD1a",
        "created_at": "2020-11-25 19:56:25",
        "updated_at": "2020-11-25 19:56:25",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 18,
        "idRol": 1,
        "nombre": "Test Automático Registrar",
        "correoCuenta": "testregistrar@gmail.com",
        "telefonoCuenta": "1234567890",
        "usuario": "test_registrar",
        "password": "$2y$04$iotjhmUWTUNZybEfmkCCJ.Cau5szGs0OwsEvSDoyQApfI1oLZWGEq",
        "created_at": "2020-11-25 20:55:52",
        "updated_at": "2020-11-25 20:55:52",
        "remember_token": null,
        "nombreRol": "admin"
    },
    {
        "id": 19,
        "idRol": 2,
        "nombre": "George Rau DDS",
        "correoCuenta": "eladio89@abernathy.com",
        "telefonoCuenta": "1234567890",
        "usuario": "zakary.frami",
        "password": "$2y$04$\/eIfx7W0T34BrTAs8DUtouem0VYdJIOfeLh8ATnn62peFf9a4LXnG",
        "created_at": "2020-11-25 21:10:26",
        "updated_at": "2020-11-25 21:10:26",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 20,
        "idRol": 1,
        "nombre": "Prof. Shanna Hammes I",
        "correoCuenta": "lakin.esperanza@rath.com",
        "telefonoCuenta": "1234567890",
        "usuario": "idell20",
        "password": "$2y$04$qmleK28yRqA9bvQvr6LZ2uVUUTCUFuUQbjjvw\/sJg4HiGDgmFTx\/C",
        "created_at": "2020-11-25 21:12:12",
        "updated_at": "2020-11-25 21:12:12",
        "remember_token": null,
        "nombreRol": "admin"
    },
    {
        "id": 21,
        "idRol": 2,
        "nombre": "Barbara Prosacco",
        "correoCuenta": "xjohns@mcclure.org",
        "telefonoCuenta": "1234567890",
        "usuario": "angie66",
        "password": "$2y$04$W.rMp4.EkNfEHPhEnMlR\/uWkby3aAkVIFwT0n6JE3QlMt2dfg6AXe",
        "created_at": "2020-11-25 21:18:33",
        "updated_at": "2020-11-25 21:18:33",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 22,
        "idRol": 1,
        "nombre": "Dr. Laverne Casper",
        "correoCuenta": "feest.joshuah@kutch.net",
        "telefonoCuenta": "1234567890",
        "usuario": "cartwright.myra",
        "password": "$2y$04$kNCtpA\/G47U6gM2U6jRMpOBmVLEr2ZfAi1egGH\/9cxWo.l0i90852",
        "created_at": "2020-11-25 21:19:47",
        "updated_at": "2020-11-25 21:19:47",
        "remember_token": null,
        "nombreRol": "admin"
    },
    {
        "id": 23,
        "idRol": 1,
        "nombre": "Angeline Klein",
        "correoCuenta": "bwalsh@schoen.com",
        "telefonoCuenta": "0987654321",
        "usuario": "janelle84",
        "password": "$2y$04$3PXhjNXXy\/tA1HqNQ5GKrOYJhCSmkawdzGspShQDZkKkUQsiE7t.2",
        "created_at": "2020-11-25 21:20:07",
        "updated_at": "2020-11-25 21:20:43",
        "remember_token": null,
        "nombreRol": "admin"
    },
    {
        "id": 24,
        "idRol": 2,
        "nombre": "Evangeline Corkery DDSeditado",
        "correoCuenta": "maudie.mcglynn@beahan.biz",
        "telefonoCuenta": "0987654321",
        "usuario": "devon91",
        "password": "$2y$04$EuG8v3fJIOH73r54qVavZeo35\/4D4Zr1rXbobi8QrQuYpEvuE2rd2",
        "created_at": "2020-11-25 21:20:43",
        "updated_at": "2020-11-25 21:21:16",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 25,
        "idRol": 2,
        "nombre": "Faye Reicherteditado sin contraseña",
        "correoCuenta": "ortiz.sterling@yahoo.com",
        "telefonoCuenta": "0987654321",
        "usuario": "herman.bo",
        "password": "$2y$04$63dYx5IeJUJmWn6sTecyNe5VYZ7aH9Ofwd9fChEpruB5rS\/UkxAVG",
        "created_at": "2020-11-25 21:21:16",
        "updated_at": "2020-11-25 22:21:47",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 26,
        "idRol": 2,
        "nombre": "Mr. Jevon Rosenbaum IVeditado",
        "correoCuenta": "borer.jessika@gmail.com",
        "telefonoCuenta": "0987654321",
        "usuario": "khalil66",
        "password": "$2y$04$Bxp6hogMwUkEzG52VBph1OhMwtDtU\/KZO2\/Yl\/FCE9yWu80Z\/wJvu",
        "created_at": "2020-11-25 21:52:17",
        "updated_at": "2020-11-25 22:21:47",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 30,
        "idRol": 2,
        "nombre": "Susana Nikolaus",
        "correoCuenta": "nmcglynn@hills.org",
        "telefonoCuenta": "1234567890",
        "usuario": "kilback.francesca",
        "password": "$2y$04$htdB5n3vv447cyuEj.hWGedR0fevlat\/mZum6kWp.IHI.m3KKWYMy",
        "created_at": "2020-11-25 22:21:47",
        "updated_at": "2020-11-25 22:21:47",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 31,
        "idRol": 2,
        "nombre": "Eric",
        "correoCuenta": "a01704340@itesm.mx",
        "telefonoCuenta": "1234567890",
        "usuario": "eric-email",
        "password": "$2y$10$e2v4OMI2V3wCz6we7C9ssOIF7nNmxTo4nV6BGrERF1nCjnrteFp7u",
        "created_at": "2020-11-26 20:26:05",
        "updated_at": "2020-11-26 20:26:05",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 32,
        "idRol": 2,
        "nombre": "Eric",
        "correoCuenta": "ericbuitron3@gmail.com",
        "telefonoCuenta": "1234567890",
        "usuario": "eric_emailprueba",
        "password": "$2y$10$hg2pwxCGdYp2A2SC8hhc4eTRbHXWBROpJ0.XIFFUwnH3bZRNbiLcO",
        "created_at": "2020-11-26 20:27:32",
        "updated_at": "2020-11-26 20:27:32",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 33,
        "idRol": 2,
        "nombre": "Jan",
        "correoCuenta": "a01704365@itesm.mx",
        "telefonoCuenta": "1234567890",
        "usuario": "jan",
        "password": "$2y$10$inM1l4jqNYaKUR4zcI9EwetXwF6knU8Fh8KYeLLWU6ZJx7dH5M4KO",
        "created_at": "2020-11-26 20:41:36",
        "updated_at": "2020-11-26 20:41:36",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 34,
        "idRol": 2,
        "nombre": "Eric T",
        "correoCuenta": "a01700249@itesm.mx",
        "telefonoCuenta": "1234567890",
        "usuario": "erict",
        "password": "$2y$10$rjsqUHWZ5kpGWp4bRqNEDe.9h4ei2yqcUnhyReP8qneqp8E5CB8hS",
        "created_at": "2020-11-26 20:42:15",
        "updated_at": "2020-11-26 20:42:15",
        "remember_token": null,
        "nombreRol": "general"
    },
    {
        "id": 36,
        "idRol": 2,
        "nombre": "Eric Torres",
        "correoCuenta": "ericto@gmail.com",
        "telefonoCuenta": "4422198977",
        "usuario": "eric7",
        "password": "$2y$10$MzUDq6PxTIp0AiVpOMhiUOqKVTjduiG\/JrB4tOX3fo\/vZ1.hHjcBa",
        "created_at": "2020-12-01 15:33:46",
        "updated_at": "2020-12-01 16:13:36",
        "remember_token": null,
        "nombreRol": "general"
    }
]
```
<div id="execution-results-GETapi-cuentas" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-cuentas"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-cuentas"></code></pre>
</div>
<div id="execution-error-GETapi-cuentas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-cuentas"></code></pre>
</div>
<form id="form-GETapi-cuentas" data-method="GET" data-path="api/cuentas" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-cuentas', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/cuentas</code></b>
</p>
<p>
<label id="auth-GETapi-cuentas" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-cuentas" data-component="header"></label>
</p>
</form>


## Display the specified account.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/cuentas/2"
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
    "id": 2,
    "idRol": 1,
    "nombre": "Eric",
    "correoCuenta": "probando@gmail.com",
    "telefonoCuenta": "4424567890",
    "usuario": "eric_bl",
    "created_at": "2020-10-15T22:25:07.000000Z",
    "updated_at": "2020-10-15T22:25:07.000000Z"
}
```
<div id="execution-results-GETapi-cuentas--cuenta-" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-cuentas--cuenta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-cuentas--cuenta-"></code></pre>
</div>
<div id="execution-error-GETapi-cuentas--cuenta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-cuentas--cuenta-"></code></pre>
</div>
<form id="form-GETapi-cuentas--cuenta-" data-method="GET" data-path="api/cuentas/{cuenta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-cuentas--cuenta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/cuentas/{cuenta}</code></b>
</p>
<p>
<label id="auth-GETapi-cuentas--cuenta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-cuentas--cuenta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>cuenta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="cuenta" data-endpoint="GETapi-cuentas--cuenta-" data-component="url" required  hidden>
<br>
id of the account to show.</p>
</form>


## Update the specified account.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/cuentas/2"
);

let headers = {
    "Authorization": "Bearer + JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idRol": 2,
    "nombre": "Eric edited",
    "correoCuenta": "ericb@gmail.com",
    "telefonoCuenta": "4428718364",
    "usuario": "eric_bl3",
    "password": "eric1234",
    "password_confirmation": "eric1234"
}

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());
```


<div id="execution-results-PUTapi-cuentas--cuenta-" hidden>
    <blockquote>Received response<span id="execution-response-status-PUTapi-cuentas--cuenta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-cuentas--cuenta-"></code></pre>
</div>
<div id="execution-error-PUTapi-cuentas--cuenta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-cuentas--cuenta-"></code></pre>
</div>
<form id="form-PUTapi-cuentas--cuenta-" data-method="PUT" data-path="api/cuentas/{cuenta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('PUTapi-cuentas--cuenta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-darkblue">PUT</small>
 <b><code>api/cuentas/{cuenta}</code></b>
</p>
<p>
<small class="badge badge-purple">PATCH</small>
 <b><code>api/cuentas/{cuenta}</code></b>
</p>
<p>
<label id="auth-PUTapi-cuentas--cuenta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="PUTapi-cuentas--cuenta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>cuenta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="cuenta" data-endpoint="PUTapi-cuentas--cuenta-" data-component="url" required  hidden>
<br>
id of the account to show.</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
<p>
<b><code>idRol</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="idRol" data-endpoint="PUTapi-cuentas--cuenta-" data-component="body" required  hidden>
<br>
id of the selected role (1 for admin, 2 for regular user).</p>
<p>
<b><code>nombre</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="nombre" data-endpoint="PUTapi-cuentas--cuenta-" data-component="body" required  hidden>
<br>
name of the person that is registering in the platform.</p>
<p>
<b><code>correoCuenta</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
<input type="text" name="correoCuenta" data-endpoint="PUTapi-cuentas--cuenta-" data-component="body"  hidden>
<br>
email that will be used for the new account.</p>
<p>
<b><code>telefonoCuenta</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="telefonoCuenta" data-endpoint="PUTapi-cuentas--cuenta-" data-component="body" required  hidden>
<br>
phone of the person registering to the platform.</p>
<p>
<b><code>usuario</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
<input type="text" name="usuario" data-endpoint="PUTapi-cuentas--cuenta-" data-component="body"  hidden>
<br>
username of the person that is registering to the platform.</p>
<p>
<b><code>password</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
<input type="text" name="password" data-endpoint="PUTapi-cuentas--cuenta-" data-component="body"  hidden>
<br>
password of the account being registered.</p>
<p>
<b><code>password_confirmation</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
<input type="text" name="password_confirmation" data-endpoint="PUTapi-cuentas--cuenta-" data-component="body"  hidden>
<br>
confirmed password of the account being registered.</p>

</form>


## Remove the specified resource from storage.

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/cuentas/15"
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


<div id="execution-results-DELETEapi-cuentas--cuenta-" hidden>
    <blockquote>Received response<span id="execution-response-status-DELETEapi-cuentas--cuenta-"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-cuentas--cuenta-"></code></pre>
</div>
<div id="execution-error-DELETEapi-cuentas--cuenta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-cuentas--cuenta-"></code></pre>
</div>
<form id="form-DELETEapi-cuentas--cuenta-" data-method="DELETE" data-path="api/cuentas/{cuenta}" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer + JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('DELETEapi-cuentas--cuenta-', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-red">DELETE</small>
 <b><code>api/cuentas/{cuenta}</code></b>
</p>
<p>
<label id="auth-DELETEapi-cuentas--cuenta-" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="DELETEapi-cuentas--cuenta-" data-component="header"></label>
</p>
<h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
<p>
<b><code>cuenta</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
<input type="number" name="cuenta" data-endpoint="DELETEapi-cuentas--cuenta-" data-component="url" required  hidden>
<br>
id of the account to delete.</p>
</form>



