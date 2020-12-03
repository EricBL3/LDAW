# Developer management

APIs for managing developers.

## Get developers.

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to retrive all the developers in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/desarrollador/getDesarrollador"
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
<form id="form-GETapi-desarrollador-getDesarrollador" data-method="GET" data-path="api/desarrollador/getDesarrollador" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-desarrollador-getDesarrollador', this);">
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



