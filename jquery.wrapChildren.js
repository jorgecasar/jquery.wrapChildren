/* jquery.wrapChildren v1.0.0 - 2013/11/13
   http://jorgedelcasar.com
   Copyright (c) 2013 Jorge del Casar (@jorgecasar) - Licensed MIT */
;(function($) {
	/**
	 * [wrapChildren jQuery plugin that wrap the children of a selected element]
	 * @param {Object}   params   [All options of the plugin]
	 * params.childrenWrapper = Tag name to wrap children
	 * params.wrappedClass = Class name to add element wrapped
	 */
	$.fn.wrapChildren = function(options) {

		var settings = $.extend({}, $.fn.wrapChildren.defaults, options ),

		wordSpacePattern  = /(\s*[^ ]+\s*)/g,

		prepareTxt = function(text){
			return text.trim().split(' ');
		},
		createWordWrapper = function(content){
			return ['<', settings.childrenWrapper, '>', content, '</', settings.childrenWrapper, '>'].join('');
		};

		return this.each(function(){
			var $this = $(this),
			words = prepareTxt($this.text()),
			newText = [], i;

			for (i = 0; i < words.length; i++){
				newText.push(createWordWrapper(words[i]));
			}
			$this.html(newText.join(' '))
			if(settings.wrappedClass !== ''){
				$this.addClass(settings.wrappedClass);
			}
		});
	};

	$.fn.wrapChildren.defaults = {
		childrenWrapper: 'span',
		wrappedClass: 'childrenWrapped'
	};
})(jQuery);
