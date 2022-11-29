export default function ({ store, route, redirect }) {

    if (!app.$fire.auth.currentUser) {
        //take them to sign in page
        return redirect('/loginscreen')
    }

}
