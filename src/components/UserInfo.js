export default class UserInfo {
  constructor(selectors) {
    this._name = document.querySelector(selectors.profileNameSelector);
    this._profession = document.querySelector(selectors.profileProfessionSelector);
    this._picture = document.querySelector(selectors.profileAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent
    }
  }

  setUserInfo(values) {
    this._name.textContent = values.name;
    this._profession.textContent = values.about;
  }

  setUserAvatar(value) {
    this._picture.style.backgroundImage = `url(${value})`;
  }
}
