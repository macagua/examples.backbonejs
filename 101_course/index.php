<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Curso 101 de Backbone JS</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap-3.3.5.min.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap-theme-3.3.5.min.css">
</head>
<body>

  <div class="container">
    <table class="table" id="content">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </table>
  </div>

  <script type="text/templates" id="tplBook">
    <td><%= id %></td>
    <td><%= name %></td>
    <td><%= age %></td>
  </script>

  <!-- Javascript libraries -->
  <script src="js/jquery-1.9.1.js" type="text/javascript"></script>
  <script src="js/bootstrap-3.3.5.min.js" type="text/javascript"></script>
  <script src="js/underscore-1.8.3-min.js" type="text/javascript"></script>
  <script src="js/backbone-1.2.3-min.js" type="text/javascript"></script>

  <!-- App Backbone.js -->
  <script src="js/app.js" type="text/javascript"></script>
</body>
</html>
