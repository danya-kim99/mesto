(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._image=e.link,this._id=e._id,this._ownerId=e.owner._id,this._likes=e.likes,this._handleImageClick=o,this._handleTrashClick=i,this._handleLikeClick=u,this._cardSelector=r,this._element=this._getTemplate(),this._elementLikeButton=this._element.querySelector(".element__like"),this._elementLikesNumber=this._element.querySelector(".element__number-of-likes"),this._elementTrashButton=this._element.querySelector(".element__trash"),this._elementImage=this._element.querySelector(".element__image"),this._elementName=this._element.querySelector(".element__title"),this._elementId=this._element.id,this._userId=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._ownerId!=this._userId&&this._element.removeChild(this._elementTrashButton),this._setEventListeners(),this._element.id=this._id,this._elementImage.src=this._image,this._elementImage.alt=this._name,this._elementName.textContent=this._name,this.changeLikeAmount(this._likes),this.changeLikeState(this._likes),this._element}},{key:"removeCard",value:function(){this._element.remove()}},{key:"changeLikeAmount",value:function(t){this._likes=t,this._elementLikesNumber.textContent=t?t.length:0}},{key:"getNumberOfLikes",value:function(){return this._likes}},{key:"getCardId",value:function(){return this._id}},{key:"getLikedState",value:function(t){var e=this;return!!t&&!!t.some((function(t){return t._id===e._userId}))}},{key:"changeLikeState",value:function(t){this.getLikedState(t)?this._elementLikeButton.classList.add("element__like_pressed"):this._elementLikeButton.classList.remove("element__like_pressed")}},{key:"_setEventListeners",value:function(){var t=this;this._elementLikeButton.addEventListener("click",(function(){t._handleLikeClick()})),this._elementTrashButton.addEventListener("click",(function(){t._handleTrashClick(t)})),this._elementImage.addEventListener("click",(function(){t._handleImageClick(t._name,t._image)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function i(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var u=function(){function t(e,n){var r,o,u,a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,u=function(){a._hasInvalidInput(a._inputList)?a._submitButton.setAttribute("disabled",!0):a._submitButton.removeAttribute("disabled")},(o=i(o="_toggleButtonState"))in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,this._params=e,this._form=n,this._inputList=Array.from(n.querySelectorAll(e.inputSelector)),this._inputErrorClass=e.inputErrorClass,this._submitButtonSelector=e.submitButtonSelector}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t,this._inputErrorClass):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._submitButton=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._form.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}))})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._checkInputValidity(e)}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"removeItem",value:function(t){t.remove()}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-button")&&t.close()}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._popupContainer=r._popup.querySelector(".popup__container"),r._form=r._popup.querySelector(".popup__container .popup__form"),r._inputList=r._form.querySelectorAll(".popup__input"),r._submitButton=r._popup.querySelector(".popup__submit"),r._handler=e,r._formValidators=n,r}return e=u,(n=[{key:"open",value:function(){m(_(u.prototype),"open",this).call(this),this.loading(!1)}},{key:"close",value:function(){m(_(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"loading",value:function(t){t||!this._popup.classList.contains("popup_type_profile")&&!this._popup.classList.contains("popup_type_avatar")?!t&&this._popup.classList.contains("popup_type_place")?this._submitButton.value="Создать":this._submitButton.value="Сохранение...":this._submitButton.value="Сохранить"}},{key:"setEventListeners",value:function(){var t=this;m(_(u.prototype),"setEventListeners",this).call(this),this._popupContainer.addEventListener("submit",(function(e){e.preventDefault(),t._handler(t._getInputValues())}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupTitle=e._popup.querySelector(".popup__title_image"),e}return e=u,(n=[{key:"open",value:function(t,e){S(w(u.prototype),"open",this).call(this),this._popupImage.src=e,this._popupImage.alt=t,this._popupTitle.textContent=t}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._popupContainer=n._popup.querySelector(".popup__container"),n._submitButton=n._popup.querySelector(".popup__submit"),n._currentCard,n}return e=u,(n=[{key:"setSubmitAction",value:function(t){this._handleSubmitCallback=t}},{key:"open",value:function(t){P(C(u.prototype),"open",this).call(this),this._currentCard=t,this.loading(!1)}},{key:"loading",value:function(t){this._submitButton.value=t?"Удаление...":"Да"}},{key:"setEventListeners",value:function(){var t=this;P(C(u.prototype),"setEventListeners",this).call(this),this._popupContainer.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitCallback()}))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e.profileNameSelector),this._profession=document.querySelector(e.profileProfessionSelector),this._picture=document.querySelector(e.profileAvatarSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._profession.textContent}}},{key:"setUserId",value:function(t){this.userId=t}},{key:"getUserId",value:function(){return this.userId}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._profession.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._picture.style.backgroundImage="url(".concat(t,")")}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var U=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._token=e.token}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(t,e){return t.ok?t.json():Promise.reject("".concat(e," Код ошибки: ").concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e,"Не удалось загрузить информацию.")}))}},{key:"postCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._getResponseData(t,"Не удалось добавить карточку.")}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t,"Не удалось удалить карточку.")}))}},{key:"putLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t,"Не удалось поставить лайк.")}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t,"Не удалось удалить лайк.")}))}},{key:"getProfileInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e,"Не удалось получить информацию о профиле.")}))}},{key:"patchProfileInfo",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._getResponseData(t,"Не удалось обновить информацию профиля.")}))}},{key:"patchProfileAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.link})}).then((function(t){return e._getResponseData(t,"Не удалось обновить аватар.")}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=document.querySelector(".profile__edit-button"),x=(document.querySelector(".profile__name"),document.querySelector(".profile__add-button")),V=document.querySelector(".profile__avatar"),N=(document.querySelector(".popup__container_place"),document.querySelector(".elements"),document.querySelector(".popup__image"),document.querySelector(".popup__title_image"),"#card"),z={};function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",token:"1c1b2771-2095-401c-a8a4-03c7a594e43a"}),H=new q({profileProfessionSelector:".profile__profession",profileNameSelector:".profile__name",profileAvatarSelector:".profile__avatar"}),M=new l((function(t){var e=$(t);M.addItem(e)}),".elements");function $(t){var e=new n(t,H.getUserId(),N,F,(function(t){Y.open(),Y.setSubmitAction((function(){Y.loading(!0),G.deleteCard(t.getCardId()).then((function(){t.removeCard(),Y.close()})).catch((function(t){console.log(t)})).finally((function(){return Y.loading(!1)}))}))}),(function(){e.getLikedState(e.getNumberOfLikes())?G.deleteLike(e.getCardId()).then((function(t){e.changeLikeAmount(t.likes),e.changeLikeState(t.likes)})).catch((function(t){console.log(t)})):G.putLike(e.getCardId()).then((function(t){e.changeLikeAmount(t.likes),e.changeLikeState(t.likes)})).catch((function(t){console.log(t)}))}));return e.createCard()}function F(t,e){X.open(t,e)}Promise.all([G.getInitialCards(),G.getProfileInfo()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H.setUserId(i._id),M.renderItems(o),H.setUserInfo(i),H.setUserAvatar(i.avatar)})).catch((function(t){console.log(t)}));var K,Q=new b(".popup_type_profile",(function(t){Q.loading(!0),G.patchProfileInfo(t).then((function(t){H.setUserInfo({name:t.name,about:t.about}),Q.close()})).catch((function(t){console.log(t)})).finally((function(){return Q.loading(!1)}))}),z),W=new b(".popup_type_place",(function(t){W.loading(!0),G.postCard(t).then((function(t){var e=$(t);M.addItem(e),W.close()})).catch((function(t){console.log(t)})).finally((function(){return W.loading(!1)}))}),z),X=new E(".popup_type_image"),Y=new I(".popup_type_submit-deletion"),Z=new b(".popup_type_avatar",(function(t){Z.loading(!0),G.patchProfileAvatar(t).then((function(t){H.setUserAvatar(t.avatar),Z.close()})).catch((function(t){console.log(t)})).finally((function(){return Z.loading(!1)}))}),z);D.addEventListener("click",(function(){var t=H.getUserInfo();Q.setInputValues(t),z.popup__form_type_profile.resetValidation(),Q.open()})),x.addEventListener("click",(function(){z.popup__form_type_place.resetValidation(),W.open()})),V.addEventListener("click",(function(){z.popup__form_type_avatar.resetValidation(),Z.open()})),X.setEventListeners(),Q.setEventListeners(),W.setEventListeners(),Y.setEventListeners(),Z.setEventListeners(),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inputErrorClass:"popup__input_type_error"},Array.from(document.querySelectorAll(K.formSelector)).forEach((function(t){var e=new u(K,t),n=t.getAttribute("name");z[n]=e,e.enableValidation()}))})();