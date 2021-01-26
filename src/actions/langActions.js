export const CHANGE_LANG = 'CHANGE_LANG';

const changeLang = ({lang})=>({
  type: CHANGE_LANG,
  payload: {
    lang: lang
}});
