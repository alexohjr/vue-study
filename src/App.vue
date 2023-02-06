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
      </ul>
      <RouterView></RouterView>
    </div>
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
