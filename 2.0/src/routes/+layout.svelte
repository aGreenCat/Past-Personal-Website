<script>
    import "../app.css";
</script>
    
<nav class="bg-stone-200 h-20 py-3 px-12 mb-10 flex items-center place-content-between">
    <img src="/banner.svg" alt="greencat" class="h-8 inline-block"/>
    <div class="inline-flex justify-end space-x-8 align-center flex-nowrap w-1/3">
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/blog'>Blog</a>
        <a href='/portfolio'>Portfolio</a>
        <a href='/contact'>Contact</a>
    </div>
    
</nav>

<div class="block px-48">
    <slot />
</div>