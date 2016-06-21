window.onload = function (){
	function Drag(id){
		this.obj = document.getElementById(id);
		this.disX = 0;
		this.disY = 0;
		var _this = this;
		this.obj.addEventListener('mousedown',function (ev){
			_this.fnDown(ev,_this)
		})
	};
	Drag.prototype.fnDown = function (ev,that){
		this.disX = ev.pageX - this.obj.offsetLeft;
		this.disY = ev.pageY - this.obj.offsetTop;
		document.addEventListener('mousemove',Move)
		document.addEventListener('mouseup',Up)
		function Move(ev){
			that.fnMove(ev)
		}
		function Up(){
			that.fnUp(Move,Up);
		}
	};
	Drag.prototype.fnMove = function (ev){
		this.obj.style.left = ev.pageX - this.disX + 'px';
		this.obj.style.top = ev.pageY - this.disY + 'px'
	};
	Drag.prototype.fnUp = function (Move,Up){
		document.removeEventListener('mousemove',Move);
		document.removeEventListener('mouseup',Up);
	}
	var dem = new Drag('box')
}