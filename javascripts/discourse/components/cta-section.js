import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";
import { defaultHomepage } from "discourse/lib/utilities";
export default Component.extend({
  router: service(),
  @discourseComputed("currentUser")
  hideLoggedIn(currentUser) {
    return (
      // if the user is logged in
      (currentUser ? true : false)
    );
  },


  @discourseComputed("router.currentRouteName", "router.currentURL")
  showHere(currentRouteName, currentURL) {
    if (settings.show_on === "all") {
      return true;
    }

    if (settings.show_on === "discovery") {
      return currentRouteName.indexOf("discovery") > -1;
    }

    if (settings.show_on === "homepage") {
      return currentRouteName == `discovery.${defaultHomepage()}`;
    }
  },
});