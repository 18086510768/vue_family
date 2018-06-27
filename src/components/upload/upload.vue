<template>
	<div class="upload">
		<form action="getfile.php" method="post" ref='up' enctype="multipart/form-data">
			<div id="output"></div>
			<input @change="showImg()" ref="myImg" type="file" name="upfile" id="filesList" multiple>
			<!-- <label for="filesList" style="height:10vw;margin:2vw auto;display:block;font-size:5vw;">点击选择照片</label> -->
			<div @click='uploadImg' type="submit" id="upload">上传</div>
		</form>
	</div>
</template>
<script>
	export default {
		data: function () {
			return {
				imgUrls: [],
				urlArr: [],
				isPhoto: true,
				btnTitle: '',
				isModify: false,
				previewImg:'',
				isPreview: false
			}
		},
		methods: {
			showImg(e) {
				let fileTag =  this.$refs.myImg;
				let files = fileTag.files,
			        reader = new FileReader();
			    console.log(files);
			    console.log(reader.result);
		        reader.onload = function() {//数据读取成功完成时触发
		        	console.log(reader.result);
		            return reader.result;
		        }
			},
			uploadImg() {
				let formdata = new FormData(this.$refs.up);//直接将表单对象赋给FormData
				console.log(formdata);
				this.$http.post('http://www.geniusong.com/tp5/public/index.php/admin/index/uploadFile',formdata).then((data) => {
          				console.log(data);
		        },(err)=>{
		          this.loading = false;
		        })
			}
		}
	}
</script>
<style>
#upload {
	width:30vw;
	height:10vw;
	line-height:10vw;
	text-align:center;
	color:#fff;
	background: #000;
	border-radius:5px;
	margin: 0 auto;
}

#output {
	width:100%;
	height:80vw;
	border:1px solid #ccc;
	overflow:hidden;
}
</style>