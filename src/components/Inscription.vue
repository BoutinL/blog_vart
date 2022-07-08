<template>
  <form class="form-inscription">
    <fieldset>
      <h1>Inscription</h1>
      <label>
        <span>Nom</span>
        <input type="text" name="firstname">
      </label>
      <label>
        <span>Prénom</span>
        <input type="text" name="lastname">
      </label>
      <label>
        <span>Nom d'utilisateur</span>
        <input type="text" name="username" required>
      </label>
      <label>
        <span>Mot de passe</span>
        <input type="password" name="pass" required>
      </label>
      <label>
        <span>Confirmation du mot de passe</span>
        <input type="password" name="repass" required>
      </label>
      <input type="submit" name="submit" value="S'inscrire" class="btn-submit">
      <span>Déja inscrit ?<a href="index.php">Login</a></span>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'inscription',
}
</script>

<style scoped>

</style>
