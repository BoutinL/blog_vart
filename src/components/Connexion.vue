<template>
    <form class="form-connexion">
        <fieldset>
            <h1>Connexion</h1>
            <label>
                <span>Nom d'utilisateur</span>
                <input type="text" name="username">
            </label>
            <label>
                <span>Mot de passe</span>
                <input type="password" name="pass">
            </label>
            <input type="submit" name="submit" value="Connexion" class="btn-submit">
            <span>Pas encore inscrit ?<a href="inscription.php">Inscription</a></span>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'connexion',
}
</script>

<style scoped>

</style>
