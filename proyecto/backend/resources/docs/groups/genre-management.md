# Genre management

APIs for managing the genre for games.

## Get gender.

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to retrive all the genders in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/genero/getGenero"
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
<form id="form-GETapi-genero-getGenero" data-method="GET" data-path="api/genero/getGenero" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-genero-getGenero', this);">
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



