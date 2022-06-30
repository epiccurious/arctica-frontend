<template>
<div class="page">
    <header>
        <h1>Family member # 1</h1>
        <h2>Please enter your family member's full name below and attach a recent photo.</h2>
    </header>
      <div class="form_container">
        <form>
                    <label>Enter Full Name</label>
                   <br><input v-model="familyName1" type="text" required placeholder="Your full name">

                    <br><button class="btn4" @click="onPickFile">Upload Photo</button>
                    <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked" />
                    <!-- This button currently reloads the page after you upload an image, need to find a fix -->
        </form>
        <div class="btn_container"> 
            <button v-if="familyName1 && image" @click="acknowledge()" class="btn">Finish</Button>
            <button v-else @click="warn()" class="btn3">Finish</Button>
            <button @click="addMember()" class="btn2">Add another member</button>
            <button @click="proceed()" class="btn2">continue(debug option)</button> <!--this will be removed -->
        </div>
    </div> 

</div>

</template>

<script>
export default {
  name: 'piiPostSetup2A',
    methods: {
        acknowledge(){
            console.log('user ack, recovery folder finished, proceeding')
            
        },
        warn(){
            console.log('user trying to proceed without name and/or image')
        },
        addMember(){
            console.log('adding a family member')
            this.addExtra = true
        },
        proceed(){
            console.log('debug proceed')
            this.$router.push({ path: '/recovery/setup/3' })
        },
        onPickFile(){
            this.$refs.fileInput.click()
        },
        onFilePicked(e){
            const files = e.target.files
            // let filename = files[0].name
            const fileReader = new FileReader()
            fileReader.addEventListener('load', ()=>{
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        }
        

    },
    data(){
        return{
            familyName1: null,
            image: null,
            addExtra: false,
        }
    }
}
</script>

<style scoped>
h1{
    font-size: 21px;
    font-weight:600;
    line-height: 25px;
}
h2{
    font-size: 18px;
    color: #777777;
    font-weight: 400;
}
h3{
    font-weight:800;
}
.btn4{
    padding:5px;
}
</style>