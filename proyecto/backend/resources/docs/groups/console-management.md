# Console management

APIs for managing consoles.

## Get consoles.

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to retrive all the consoles in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/consola/getConsola"
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
<form id="form-GETapi-consola-getConsola" data-method="GET" data-path="api/consola/getConsola" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-consola-getConsola', this);">
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



