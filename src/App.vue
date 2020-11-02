<template>
  <div id="container">
    <div class="row mt-4">
      <div class="col text-center">
        <h1>Markdown Editor</h1>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6">
        <h4>Markdown</h4>
        <textarea
         class="info lt" 
         v-model="markdown"
         />
      </div>
      <div class="col-md-6">
        <h4>Preview</h4>
        <div readonly
        :key="markdown"
        class="info txt scroll rt resize"
        v-markdown
        >
        {{markdown}}
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="main">
        Made with ❤️ in the USA 🇺🇸 by <a href="https://github.com/razod">Nexh</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      markdown: "# Hello!\n### This is a markdown editor!\nYou can have inline code like `var foo = 'bar';`\n\nor an image of a bear\n\n<img src=\"https://placebear.com/300/200\" alt=\"bear\" />"
    };
  },
};
</script>

<style scoped>
* {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif !important;
}
textarea {
  resize: none;
  border: 1px black;
  outline: none;
}
.info {
  height: 350px;
  width: 100%;
  background-color: rgba(255, 255, 255);
}
.txt {
  color: black;
}
    
div.scroll {  
    height: 350px;
  width: 95%;
                background-color: white; 
                overflow-x: hidden; 
                overflow-x: auto; 
                text-align:justify; 
                resize: both;
            } 
</style>
