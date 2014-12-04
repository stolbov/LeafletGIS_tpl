window.$ = function(selector) {
	var FUNCT = {
		_getElement: function(selector) {
			var key = selector[0];
			this.OBJ = false;
			switch(key) {
				case '#': this.OBJ = document.getElementById(selector.slice(1)); break;
				case '.': this.OBJ = document.querySelector(selector); break;
				case '@': this.OBJ = document.getElementsByName(selector.slice(1)); break;
				case '=': this.OBJ = document.getElementsByTagName(selector.slice(1)); break;
				case '?': this.OBJ = document.querySelectorAll(selector.slice(1)); break;
			}
			return FUNCT;
		},
		click: function(done) {
			this.OBJ.addEventListener('click', function(e) {
				e.preventDefault();
				done(e);
			}, false);
			return FUNCT;
		},
		keydown: function(done) {
			this.OBJ.addEventListener("keydown", function(e) {
				done(e);
			}, false);
		},
		setClass: function(newClass) {
			this.OBJ.className = newClass;
			return FUNCT;
		},
		value: function(newVal) {
			this.OBJ.value = newVal;
			return FUNCT;
		},
		hide: function() {
			this.OBJ.style.display = 'none';
			return FUNCT;
		},
		show: function() {
			this.OBJ.style.display = 'block';
			return FUNCT;
		},
		html: function(html) {
			this.OBJ.innerHTML = html;
			return FUNCT;
		},
	};

	return FUNCT._getElement(selector);
};

var testHTML = "-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>-- res search -- <br>"

$('.leafletSearchField').keydown(function(e){
	if(e.keyCode == 13) {
		e.preventDefault();
		$('.leafletSearchWr').setClass('leafletPanelArea leafletSearchWr active');
		$('.leafletPreloaderWr').show();
		$('.leafletSearchResultsItem').html('');
		setTimeout(function() {
			$('.leafletPreloaderWr').hide();
			$('.leafletSearchResultsItem').html(testHTML);
		}, 1000);
	}
	//$('.leafletSearchWr').setClass('leafletPanelArea leafletSearchWr active');
});
$('.miniBtn.clearBtn').click(function(e){
	$('.leafletSearchWr').setClass('leafletPanelArea leafletSearchWr');
	$('.leafletSearchField').value('');
	$('.leafletSearchResultsItem').html('');
});