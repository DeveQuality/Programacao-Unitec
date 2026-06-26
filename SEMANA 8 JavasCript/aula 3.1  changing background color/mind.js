function ChangeDark(){
            const mode_dark = document.getElementById('bg_dark')
            let Mode_Dark = mode_dark.value

            mode_dark.style.backgroundColor='black'
            mode_dark.style.color='white'
            
        }

        function ChangeWhite(){
            const mode_white = document.querySelector('body.bg_white')
            let Mode_White = mode_white.value

            mode_white.style.backgroundColor='white'
            mode_white.style.color='black'
            
        }
