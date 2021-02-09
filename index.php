<!DOCTYPE html>
<html>
<head>
    <title>Socket.IO chat</title>
    <style>
        body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }

        #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }
        #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
        #input:focus { outline: none; }
        #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }

        #messages { list-style-type: none; margin: 0; padding: 0; }
        #messages > li { padding: 0.5rem 1rem; }
        #messages > li:nth-child(odd) { background: #efefef; }
    </style>
</head>
<body>

<div style="float: left; width: 10%; background: grey; height: 100vh; text-align: center" id="users"><h3>Kullanıcılar</h3></div>
<div style="float: left; width: 90%"><ul id="messages"></ul></div>

<form id="form" action="">
    <input id="input" autocomplete="off" /><button>Send</button>
</form>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer src="http://localhost:3001/socket.io/socket.io.js"></script>
<script defer src="script.js" type="text/javascript"></script>
</body>
</html>