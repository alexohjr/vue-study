<template>
    <div id="menu">
      <ul>
          <li><RouterLink to="/home">Home</RouterLink></li>
          <li><RouterLink to="/helloworld">HelloWorld</RouterLink></li>
          <li><RouterLink to="/countUp">CountUp</RouterLink></li>
          <li><RouterLink to="/data">Data</RouterLink></li>
          <li><RouterLink to="/dataBind">DataBind</RouterLink></li>
          <li><RouterLink to="/formData">FormData</RouterLink></li>
          <li><RouterLink to="/method">Method</RouterLink></li>
          <li><RouterLink to="/ifElseArray">IfElse</RouterLink></li>
          <li><RouterLink to="/googleChart">GoogleChart</RouterLink></li>
          <li><RouterLink to="/dataWatcher">DataWatcher</RouterLink></li>
      </ul>
    </div>
    <RouterView></RouterView>
</template>

<style>
#menu ul li {
  display: inline-block;
  margin: 10px;
}
#app {
  margin-bottom: 100px;
}
</style>
