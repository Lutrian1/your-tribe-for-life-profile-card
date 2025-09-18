<script>
    import Line from "$lib/assets/Line.svelte";
    import { Magnifying_glass } from '$lib';
    import { Tape } from "$lib";

    const { luukInfo } = $props()
</script>

<Magnifying_glass>

    <!-- COMPONENT: TAPE--> 
    <Tape />

    <section class="zoomable-section">

        <h5>Classified</h5>

        <Line className="line-4"/>

        <p>GEÏNFORMEERD DOSSIER – [ TEAM: [ { luukInfo.squads } ] ]</p>
        <p>ONDERWERP: Persoonsdossier & Capaciteiteninventarisatie van { luukInfo.name } aka "{ luukInfo.nickname }"</p>

        <p>DOSSIERNUMMER: { luukInfo.id }</p>
        <p>STATUS: { luukInfo.role }</p>

        <Line className="line-5"/>

        <h6>1: BIOGRAFISCHE GEGEVENS & PROFIEL</h6>

        <p>Het subject, gecodeerd als <strong>{ luukInfo.nickname }</strong>, is operationeel sinds <strong>{ luukInfo.birthdate }</strong>. 
        Zijn primaire online handtekening (GitHub) is gelinkt aan het alias <strong>{ luukInfo.github_handle }</strong>. 
        <s>Zijn psychologische voorkeur voor een werk- en denkomgeving wordt gedomineerd door de { luukInfo.most_energy } uren.</s>
        Zijn esthetische voorkeur in digitale omgevingen wordt gekarakteriseerd door het gebruik van de eigenschap <strong>{ luukInfo.fav_property }</strong> en het element <strong>{ luukInfo.fav_tag }</strong></p>
            
        <p><s>Zijn fysieke kenmerken zijn vastgelegd in een gestandaardiseerd portret (avatar). Deze is momenteel buiten het document te vinden.</s></p>

        <ul>
            <li>Favoriete kleur: <strong>{ luukInfo.fav_color }</strong></li>
             <li><s>Favoriete emoji:<strong>{ luukInfo.fav_emoji }</strong></s></li>
        </ul>

        <h7>2: OPERATIONELE SPECIALISATIES & PERSOONLIJKE KENMERKEN</h7>

        <p>Het subject toont affiniteit met de techniek <strong>{ luukInfo.fav_feature }</strong> en het attribuut <strong>{ luukInfo.fav_attribute }</strong>, 
            wat duidt op een efficiënte en mogelijk ~~stiekeme~~ methodische aanpak. Zijn culinaire ondersteuning tijdens missies bestaat voornamelijk uit een <strong>{ luukInfo.fav_kitchen }</strong>.</p>

        <p><s>Zijn persoonlijkheidsprofiel (aangetroffen in custom data)</s> onthult het volgende:</p>
            
        <ul>
            <li><s>Primaire hobby: { luukInfo.custom.hobby }</s></li>
            <li><s>Werkdetails: { luukInfo.custom.work }</s></li>
            <li><s>Persoonlijke eigenaardigheid #1: { luukInfo.custom.personal }</s></li>
            <li><s>Persoonlijke eigenaardigheid #2: { luukInfo.custom.doublepersonal }</s></li>
            <li><s>Studentnummer: { luukInfo.custom.studentnumber}</s></li>
        </ul>

        <p>Gedocumenteerde voorkeuren:</p>

        <ul>
            <li>Favoriete hobby: { luukInfo.fav_hobby }</li>
            <li>Favoriet dier: { luukInfo.fav_animal }</li>
            <li>Favoriet land: { luukInfo.fav_country }</li>
            <li>Favoriet boekgenre: <s>{ luukInfo.fav_book_genre }</s></li>
            <li>Favoriete cafeïneconsumptie: <s>{ luukInfo.fav_coffee}</s></li>
        </ul>

        <h8>3: OPERATIONELE INZET & SQUADRONS</h8>

        <p>Het subject is actief toegewezen aan de eenheid <strong>{ luukInfo.team} </strong>. 
        Zijn operationele inzetbaarheid is bevestigd binnen de squadrons met de codes: <strong>{ luukInfo.squads }</strong>.
        <s>Er is een zogenaamde 'shameless plug' geregistreerd, mogelijk een dekmantel of bron van inkomsten.</s> 
        Link dient gevalideerd te worden: <strong>{ luukInfo.custom.shamelessplug }</strong>.
        <s>Een officieel mugshot en profielkaart zijn gegenereerd maar nog niet goedgekeurd voor algemene distributie.</s> 
        (Mugshot ID: <strong>{ luukInfo.mugshot }</strong>, Profielkaart: <strong>{ luukInfo.profilecard }</strong>). 
        Een persoonlijke website is op dit moment <strong>{ luukInfo.website }</strong> niet actief. Een uitgebreide bio is momenteel 
        <strong>{luukInfo.bio }</strong> niet aanwezig in het dossier.</p>

        <p><s>DOSSIER LAATST BIJGEWERKT OP:</s> <strong>{ luukInfo.date_updated }</strong></p>

    </section>
        
</Magnifying_glass>

<style>

    section {
        border: solid var(--main-color);
        padding: 0 2vw 2vw 2vw;
        margin: 0 1vw 1vw 1vw;
        max-width: 850px;
        background-color: white;
        position: relative;
        font-family: var(--main-font); /* Ensure font is applied to sections */
    }

    h5{
        font-family: Top-Secret, Georgia, Times, 'Times New Roman', serif; 
        margin: 2vh;
        text-align: center;
        transform: rotate(-6deg);
        color: var(--secondary-color);
        font-size: 2.5rem;
    }
    
    strong{
        font-style: normal;
    }

    s{
        background-color: var(--main-color);
    }

    h6, h7, h8{
        font-size: 2rem;
        margin: 1vh;
        font-weight: 800;
    }

</style>
