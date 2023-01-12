import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    sendPasswordResetEmail,
    updatePassword,
    onAuthStateChanged,
	signOut,
    FacebookAuthProvider
}from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyANjXg9ighDIyS7xgYEIUfg65Bcdzv396I",
//     authDomain: "test-d075e.firebaseapp.com",
//     projectId: "test-d075e",
//     storageBucket: "test-d075e.appspot.com",
//     messagingSenderId: "1003451507207",
//     appId: "1:1003451507207:web:84804bcf5664fb189bc0a2",
//     measurementId: "G-5FLQLC7CVY"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDG_sf2bnRZdcxBOumpTcN1OT9aADfoMoY",
    authDomain: "discount-646d6.firebaseapp.com",
    projectId: "discount-646d6",
    storageBucket: "discount-646d6.appspot.com",
    messagingSenderId: "961694167011",
    appId: "1:961694167011:web:4821329e3f6a9209103ad6",
    measurementId: "G-7RWEG0QETC"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();


const auth = getAuth(app);

let btnLogin = document.querySelector('.btn-submit.btn-login')
let btnRegister = document.querySelector('.btn-submit.btn-signup')
let btnLoginFb = document.querySelector('.btn-login-fb')
let btnLoginGg = document.querySelector('.btn-login-gg')

if(btnLoginFb) {
    btnLoginFb.addEventListener("click", () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider).then(result => {
            const user = result.user;
            let userData = {
                email: user.email || '',
                name: user.displayName || '',
                phone: user.phoneNumber || '',
            }
            const userInfo = ref(database, 'users/' + user.uid);
            onValue(userInfo, async (snapshot) => {
                const data = snapshot.val();
                if(data) {
                    await sessionStorage.setItem('userData', JSON.stringify(data)) 
                    window.location.href = '/account/profile.html'     
                } else {
                    await set(ref(database, 'users/' + user.uid), userData);    
                    sessionStorage.setItem('userData', JSON.stringify(userData))    
                    window.location.href = '/account/profile.html'  
                }
            });
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            let notify = document.querySelector('.notify-login')
            notify.textContent = generateMessage(errorCode)
            notify.style.color = 'red'

            let idInter = setInterval(() => {
                notify.textContent = ''
                clearInterval(idInter)
            }, 3000)
            
          })
    })
}

if(btnLoginGg) {
    btnLoginGg.addEventListener("click", () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(result => {
            const user = result.user;
            let userData = {
                email: user.email || '',
                name: user.displayName || '',
                phone: user.phoneNumber || '',
            }
            const userInfo = ref(database, 'users/' + user.uid);
            onValue(userInfo, async (snapshot) => {
                const data = snapshot.val();
                if(data) {
                    await sessionStorage.setItem('userData', JSON.stringify(data)) 
                    window.location.href = '/account/profile.html'     
                } else {
                    await set(ref(database, 'users/' + user.uid), userData);    
                    sessionStorage.setItem('userData', JSON.stringify(userData))    
                    window.location.href = '/account/profile.html'  
                }
            });
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            let notify = document.querySelector('.notify-login')
            notify.textContent = generateMessage(errorCode)
            notify.style.color = 'red'

            let idInter = setInterval(() => {
                notify.textContent = ''
                clearInterval(idInter)
            }, 3000)
            
          })
    })
}

if(btnRegister) {
    btnRegister.addEventListener("click", () => {
        let email = document.querySelector('.login-container #email').value
        let password = document.querySelector('.login-container #password').value
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            let userData = {
                email: user.email || '',
                name: user.displayName || '',
                phone: user.phoneNumber || '',
            }
            set(ref(database, 'users/' + user.uid), userData);
            sessionStorage.setItem('userData', JSON.stringify(userData))
            window.location.href = '/account/profile.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            let notify = document.querySelector('.notify-login')
            notify.textContent = generateMessage(errorCode)
            notify.style.color = 'red'

            let idInter = setInterval(() => {
                notify.textContent = ''
                clearInterval(idInter)
            }, 3000)
        });
    })
}

if(btnLogin) {
    btnLogin.addEventListener("click", () => {
        let email = document.querySelector('.login-container #email').value
        let password = document.querySelector('.login-container #password').value
    
        signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            const userInfo = ref(database, 'users/' + user.uid);
            await onValue(userInfo, (snapshot) => {
                const data = snapshot.val();
                sessionStorage.setItem('userData', JSON.stringify(data)) 
                window.location.href = "/account/profile.html"
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            let notify = document.querySelector('.notify-login')
            notify.textContent = generateMessage(errorCode)
            notify.style.color = 'red'

            let idInter = setInterval(() => {
                notify.textContent = ''
                clearInterval(idInter)
            }, 3000)
        });
    })
}


function changePassword(auth, newPassword) {
    const user = auth.currentUser
    updatePassword(user, newPassword).then(() => {
        console.log('updated successful')
    }).catch(() => {
        console.log('update fail')
    })
}

function resetPassword(auth, email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        let notify = document.querySelector('.notify-reset')
        notify.textContent = 'Reset email has been sent!'
        notify.style.color = 'green'

        let idInter = setInterval(() => {
            notify.textContent = ''
            clearInterval(idInter)
        }, 3000)
    })
    .catch((error) => {
        const errorCode = error.code;
        let notify = document.querySelector('.notify-reset')
        notify.textContent = generateMessage(errorCode)
        notify.style.color = 'red'

        let idInter = setInterval(() => {
            notify.textContent = ''
            clearInterval(idInter)
        }, 3000)
    });
}

let resetLink = document.querySelector('.form-profile .reset-link')
if(resetLink) {
	resetLink.addEventListener("click", (e) => {
		e.preventDefault()
        let email = document.querySelector('.form-profile #email').value
		resetPassword(auth, email)
	})
}

function updateUserProfile(auth, profile) {
	const user = auth.currentUser;
	if(user) {
		const updates = {}
		updates['users/' + user.uid] = profile
		btnSave.classList.add('loading')
		update(ref(database), updates).then(() => {
			let newData = {
				...JSON.parse(sessionStorage.getItem('userData')),
				...profile
			}
			sessionStorage.setItem('userData', JSON.stringify(newData))
			document.querySelector('.form-profile .footer-form small').textContent = "Updated!"
			let idInter = setInterval(() => {
				document.querySelector('.form-profile .footer-form small').textContent = '',
				clearInterval(idInter)
			}, 3000)
			getUserFromSession()
		}).catch((error) => {
			console.log(error.message)
		}).finally(() => {
			btnSave.classList.remove('loading')
		})
	}
}

let btnSave = document.querySelector('.form-profile .btn-save')
if(btnSave) {
    btnSave.addEventListener("click", () => {
		let noti = document.querySelector('.form-profile .footer-form small')
		noti.textContent = ''
        let email = document.querySelector('.form-profile #email').value
        let phone = document.querySelector('.form-profile #phone').value
        let first_name = document.querySelector('.form-profile #first_name').value
        let last_name = document.querySelector('.form-profile #last_name').value
        let year = document.querySelector('.form-profile #year').value
        let month = document.querySelector('.form-profile #month').value
        let day = document.querySelector('.form-profile #day').value
        let gender = document.querySelector('.form-profile #gender').value
        let language = document.querySelector('.form-profile #language').value
        let currency = document.querySelector('.form-profile #currency').value
        let profile = {
            email: email,
            phone: phone,
            first_name: first_name,
            last_name: last_name,
            birth_day: `${year}-${month}-${day}`,
            gender: gender,
            language: language,
            currency: currency
        }

        updateUserProfile(auth, profile)
    })
}

function getCurrentUser(auth) {
    let userData = {}
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userInfo = ref(database, 'users/' + user.uid);
            onValue(userInfo, (snapshot) => {
                const data = snapshot.val();
                if(data) {
                        sessionStorage.setItem('userData', JSON.stringify(data))
						document.querySelector('.form-profile #email').value = data.email || ''
						document.querySelector('.form-profile #phone').value = data.phone || ''
						document.querySelector('.form-profile #first_name').value = data.first_name || ''
						document.querySelector('.form-profile #last_name').value = data.last_name || ''
						document.querySelector('.form-profile #year').value = data.birth_day ? new Date(data.birth_day).getFullYear() : 0
						document.querySelector('.form-profile #month').value = data.birth_day ? new Date(data.birth_day).getMonth() + 1 : 0
						document.querySelector('.form-profile #day').value = data.birth_day ? new Date(data.birth_day).getDate() : 0
						document.querySelector('.form-profile #gender').value = data.gender || 0
						document.querySelector('.form-profile #language').value = data.language || 0
						document.querySelector('.form-profile #currency').value = data.currency || 0
                }
            });
        }
    });
    return userData
}

function getUserFromSession() {
	let data = JSON.parse(sessionStorage.getItem('userData'))
	document.querySelector('.form-profile #email').value = data.email || ''
	document.querySelector('.form-profile #phone').value = data.phone || ''
	document.querySelector('.form-profile #first_name').value = data.first_name || ''
	document.querySelector('.form-profile #last_name').value = data.last_name || ''
	document.querySelector('.form-profile #year').value = data.birth_day ? new Date(data.birth_day).getFullYear() : 0
	document.querySelector('.form-profile #month').value = data.birth_day ? new Date(data.birth_day).getMonth() + 1 : 0
	document.querySelector('.form-profile #day').value = data.birth_day ? new Date(data.birth_day).getDate() : 0
	document.querySelector('.form-profile #gender').value = data.gender || 0
	document.querySelector('.form-profile #language').value = data.language || 0
	document.querySelector('.form-profile #currency').value = data.currency || 0
}

if(['/account/profile.html'].includes(window.location.pathname)) {
    if(sessionStorage.getItem('userData')) {
        getUserFromSession()
    } else {
        getCurrentUser(auth)
    }
}


let logoutBtn = document.querySelector('.account .logout')
if(logoutBtn) {
	logoutBtn.addEventListener("click", (e) => {
		e.preventDefault()
		signOut(auth).then(() => {
			sessionStorage.removeItem('userData')
            window.location.href = '/'
		}).catch((error) => {
			console.log(error)
		});
	})
}

function removeDisableField() {
	document.querySelector('.form-profile #email').removeAttribute('disabled', '')
	document.querySelector('.form-profile #phone').removeAttribute('disabled', '')
	document.querySelector('.form-profile #first_name').removeAttribute('disabled', '')
	document.querySelector('.form-profile #last_name').removeAttribute('disabled', '')
	document.querySelector('.form-profile #year').removeAttribute('disabled', '')
	document.querySelector('.form-profile #month').removeAttribute('disabled', '')
	document.querySelector('.form-profile #day').removeAttribute('disabled', '')
	document.querySelector('.form-profile #gender').removeAttribute('disabled', '')
	document.querySelector('.form-profile #language').removeAttribute('disabled', '')
	document.querySelector('.form-profile #currency').removeAttribute('disabled', '')
	let btnSave = document.querySelector('.form-profile .btn-save')
	btnSave.classList.remove('loading')

}

function generateMessage(code) {
    switch (code) {
        case 'auth/user-not-found':
            return "Can't find any users with this email !"
        case 'auth/wrong-password':
            return "Incorrect password !"
        case 'auth/weak-password':
            return "Password so weak !"
        case 'auth/email-already-in-use': 
            return 'Email already in use !'
        default:
            return "Send request failed!"
    }
}

window.onload = e => {
	if(['/account/profile.html'].includes(window.location.pathname)) {
        removeDisableField()
    }
}