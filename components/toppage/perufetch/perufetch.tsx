import styles from './perufetch.module.css'

const Perufetch = () => {


    var context = `
$ perufetch
                                         Peruki@future-university-hakodate
   .                                     ---------------------------------
  ##########==  =#                       Name: Teruki TADA
   ##===####==###==#==.                  Shell: Japanese
   ##==####==##        ===               Location: Hakodate, Japan
    ########=             #=             Affiliation: Future University Hakodate
     ####=            ##   .#.           Mascot: Perukun
      #         ##    ##     #           Twitter: @PerukiFUN
      #         ##         .#=           GitHub: TadaTeruki
      =#               ====              Native Language: Go
        =====.    ====                   Languages: C, C++, Go, (Rust)
       =#=#########.                     Fields: Procedural Generation (CG)
     #######=######=                           : Backend Web Development
        ===  #     =   
        
  See : https://github.com/TadaTeruki/perufetch
`
    return (
        <p className={styles.main}>
            <div className={styles.container}>
                {context}
            </div>
            
        </p>
    )
}


export default Perufetch