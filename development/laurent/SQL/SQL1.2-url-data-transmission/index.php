<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Transmission de données entre 2 pages</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800&display=swap" rel="stylesheet">
    <link href="css/lib/normalize.css" rel="stylesheet">
    <link href="css/lib/all.min.css" rel="stylesheet">
    <link href="css/lib/layout-3wa.css" rel="stylesheet">
    <link href="css/lib/theme-cafeine.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
  <header class="banner">
    <a class="banner-link" href="./">
      <strong class="banner-title">Transmission de données via l'URL</strong>
      <small>PHP/SQL - Module 1</small>
    </a>
  </header>
  <main class="container">

    <article class="project-section">
        <h1>Transmission de données via l'URL</h1>
        <p>Il est tout à fait possible de transmettre des données directement dans l'URL d'une page sans passer par un formulaire. Vous pouvez envoyer des données à une
        page simplement dans le lien vers cette page par exemple.</p>
        <p>Les données qui voyagent dans l'URL vont apparaître à la fin de celle-ci dans ce qu'on appelle la chaîne de requête.</p>
        <p>La chaîne de requête commence par un point d'interrogation <span class="accent">?</span> et on peut mettre dedans plusieurs couples <b>paramètre/valeur</b> de la manière suivante :
        <code><?= htmlspecialchars('?param1=valeur1&param2=valeur2') ?></code></p>

        <section>
            <h2>Cas d'utilisation : transmettre un identifiant dans un lien</h2>
            <p>On se sert de la chaîne de requête généralement pour transmettre une petite information qui va être utile sur la page cible. Par exemple
            si vous avez un site qui présente une liste d'articles, un fichier PHP unique va gérer l'affichage de tous les articles. Pour savoir quel article afficher, on va transmettre
            le numéro de l'article. Survolez les liens de l'exemple ci-dessous et regardez bien les URLs en pied de page du navigateur avant de cliquer dessus !</p>

            <?php $sourceForm = <<<SRCFORM
<ul>
<li><a href="index.php?article=17">Article 17</a></li>
<li><a href="index.php?article=23">Article 23</a></li>
<li><a href="index.php?article=38">Article 38</a></li>
</ul>
SRCFORM;
            ?>
            <pre><code contenteditable="true" spellcheck="false"><?= htmlspecialchars($sourceForm) ?></code></pre>

            <ul>
                <li><a href="index.php?article=17#reception">Article 17</a></li>
                <li><a href="index.php?article=23#reception">Article 23</a></li>
                <li><a href="index.php?article=38#reception">Article 38</a></li>
            </ul>
        </section>

        <section>
            <h2 id="reception">Réception des données</h2>

            <?php if(array_key_exists('article', $_GET) && is_numeric($_GET['article'])): ?>
                <p class="accent">Merci !! :)</p>
            <?php endif; ?>

            <p>Les données transmises dans la chaîne de requête sont toujours récupérées dans la variable super globale <code>$_GET</code>. Celle-ci contient un tableau associatif
            dont les clés sont le <em>nom des paramètres qui ont voyagé dans l'URL</em>. Dans l'exemple ci-dessus on a créé dans les URLs des liens un paramètre <span class="accent">article</span>,
            que l'on va donc récupérer à la clé <em>article</em> du tableau $_GET : <code>$_GET['article']</code></p>

            <h4>Le paramètre est-il bien présent ?</h4>
            <p>La chaîne de requête apparaît dans la barre d'adresse du navigateur et l'internaute peut la modifier. Il ne faut jamais faire confiance à l'internaute et
            il est nécessaire de vérifier si le paramètre attendu existe bien et s'il est conforme à nos attentes.</p>
            <p>On va donc vérifier que la clé <span class="accent">article</span> existe bien dans les clés du tableau <code>$_GET</code> avec la fonction <span class="accent">array_key_exists</span> : <code>if(array_key_exists('article', $_GET))</code>.</p>

            <p>
                <?php if(array_key_exists('article', $_GET)): ?>
                    Je peux voir ici que le test <code>if(array_key_exists('article', $_GET))</code> est <span class="accent">true</span>, vous avez cliqué sur un lien
                    car le paramètre <span class="accent">article</span> existe bien dans la chaîne de requête.
                    <?php if(is_numeric($_GET['article'])): ?>
                        Il semble que vous souhaitiez lire l'article <b>n°<?= htmlspecialchars($_GET['article']) ?></b>
                    <?php else: ?>
                        Il semblerait que le numéro de l'article ne soit pas un nombre... bizarre.
                    <?php endif; ?>

                <?php else: ?>
                    Il n'y a pas de paramètre article dans l'URL, vous n'avez pas encore cliqué sur un lien, allez-y !
                <?php endif; ?>
            </p>
        </section>

        <section>
            <h2 id="reception">Réception des données</h2>
            <ul>
                <li>
                    <a href="https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/912799-transmettez-des-donnees-avec-lurl">
                        [openclassrooms] Transmettez des données avec l'URL
                    </a>
                </li>
                <li>
                    <a href="https://www.php.net/manual/fr/reserved.variables.get.php">
                        [php.net] $_GET
                    </a>
                </li>
            </ul>
        </section>
    </article>
    </main>
    <footer id="mentions" class="mentions">
      <a href="http://3wa.fr/" title="Site de la 3WA"><img src="./img/3wa.png" alt="3W Academy" width="50"></a>
      <p><strong> &copy; 3W Academy - Formation Développeur WEB - Tous&nbsp;droits&nbsp;réservés</strong></p>
      <a class="goTop" href="#" aria-label="Remonter">↑</a>
    </footer>
</body>
</html>
