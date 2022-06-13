  <template>
<div class="page">
    <NavImmediate/>
    <div class="outer_container">
        <div class="head_container">
         <h1>Send Bitcoin</h1>
         </div>
    <div class="send_container">
        <form>
            <label>Description (optional)</label>
            <br><input v-model="description" type="text" placeholder="What is this transaction for?">

            <br><label>Address</label>
            <br><input v-model="address" type="text" required placeholder="Enter Address">
        </form>
    </div>

        <button class="btn">New Address</Button>
    </div>        
</div>
</template>


<script>
import NavImmediate from '@/components/NavImmediate'

export default {
  name: 'immediateSend',
  components: {
    NavImmediate
  },
   data(){
     return{
         description: '',
         address: '',
     }
 }
}
</script>


<style>
  </style>




<style scoped>
.outer_container{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.send_container{
    box-sizing:border-box;
    padding:15px;
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width:70%;
    margin: 25px auto;
}
h1{
  margin-top: 50px;
  padding:10px;
  text-align:left;
  font-weight:600;
  font-size:21px;
  line-height:25px
}
.head_container{
  width: 30%;
}
form{
    max-width:70%;
    width: 60%;
    margin: 30px auto;
    text-align: left;
    padding:40px;
}
label{
    display:inline-block;
    margin: 25px 0 15px;
    font-size: 20px;

}
input{
    display: block;
    padding: 10px 50px 10px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    
}
  </style>