
<html>

<body>
  <input id="userName" style="border: 3px solid #999;" oninput="modelToView(this.value)" />
  <label id="userNameTo" style="border: 3px solid #999;"></label>
  <script type="text/javascript">
    var inputObj = document.getElementById('userName');
    var showObj = document.getElementById('userNameTo');
    var model = new Object(null);
    Object.defineProperty(model, 'user', {
      set: function (value) {
        showObj.innerHTML = value;
        user = value;
      },
      get: function () {
        return user;
      }
    })

    function modelToView() {
      model['user'] = inputObj.value
    }
  </script>
</body>

</html>