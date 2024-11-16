<script>
    import "../styles/app.scss";
    import { onMount } from "svelte";
    let currentTime = "";

    function updateTime() {
        const date = new Date();
        const options = {
            timeZone: "Europe/Moscow",
            hour: "2-digit",
            minute: "2-digit",
        };
        currentTime = date.toLocaleTimeString("en-US", options);
    }

    onMount(() => {
        updateTime();
        const interval = setInterval(updateTime, 10000);
        return () => clearInterval(interval);
    });

    let posts = [];
</script>

<div class="navbar">
    <img src="/logo.svg" alt="Logotype" class="logo" />
    <div class="links">
        <a href="/" class="current-page">Home</a>
        <a href="#">Biography</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contacts</a>
    </div>
    <div class="time">
        {currentTime}
    </div>
</div>

<div>
    <h1>Hi! My name is Stefan Mukhin, also known as stefanlight.</h1>
    <h3>I’m software engineer and graphic designer.</h3>
</div>

<div>
    <h1>Latest posts</h1>
    {#each posts as post}
        <article class="post">
            <p class="timestamp">{post.timestamp}</p>
            <h2 class="title">{post.title}</h2>
            <p class="description">{post.description}</p>
        </article>
    {/each}
    <a class="more_posts_link" href="#">more...</a>
</div>
