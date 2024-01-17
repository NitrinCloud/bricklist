import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
    return (
        <main className="h-screen flex justify-center items-center p-44">
            <Card className="min-h-full w-full">
                <CardHeader>
                    <CardTitle>Datenschutzerklärung</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col prose">
                    <h1>Datenschutzerkl&auml;rung</h1>

                    <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>

                    <p><b>1.1</b>&nbsp;Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns f&uuml;r Ihr Interesse. Im Folgenden informieren wir Sie &uuml;ber den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.</p>

                    <p><b>1.2</b>&nbsp;Verantwortlicher f&uuml;r die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Mats Snorre Fischer, Nitrin, Ellerbeker Weg 125, 24147 Kiel, Deutschland, Tel.: +49 171 5241660, E-Mail: m.fischer@nitrin.de. Der f&uuml;r die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

                    <h2>2) Datenerfassung beim Besuch unserer Website</h2>

                    <p><b>2.1</b>&nbsp;Bei der blo&szlig; informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen &uuml;bermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver &uuml;bermittelt (sog. &bdquo;Server-Logfiles&#8220;). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die f&uuml;r uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:</p>

                    <ul>
                        <li>Unsere besuchte Website</li>
                        <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                        <li>Menge der gesendeten Daten in Byte</li>
                        <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                        <li>Verwendeter Browser</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                    </ul>

                    <p>Die Verarbeitung erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilit&auml;t und Funktionalit&auml;t unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachtr&auml;glich zu &uuml;berpr&uuml;fen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.</p>

                    <p><b>2.2</b>&nbsp;Diese Website nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschl&uuml;sselung. Sie k&ouml;nnen eine verschl&uuml;sselte Verbindung an der Zeichenfolge &bdquo;https://&#8220; und dem Schloss-Symbol in Ihrer Browserzeile erkennen.</p>

                    <h2>3) Cookies</h2>

                    <p>Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu erm&ouml;glichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endger&auml;t abgelegt werden. Teilweise werden diese Cookies nach Schlie&szlig;en des Browsers automatisch wieder gel&ouml;scht (sog. &bdquo;Session-Cookies&#8220;), teilweise verbleiben diese Cookies l&auml;nger auf Ihrem Endger&auml;t und erm&ouml;glichen das Speichern von Seiteneinstellungen (sog. &bdquo;persistente Cookies&#8220;). Im letzteren Fall k&ouml;nnen Sie die Speicherdauer der &Uuml;bersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.</p>

                    <p>Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchf&uuml;hrung des Vertrages, gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestm&ouml;glichen Funktionalit&auml;t der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.</p>

                    <p>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und einzeln &uuml;ber deren Annahme entscheiden oder die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en k&ouml;nnen.</p>

                    <p>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalit&auml;t unserer Website eingeschr&auml;nkt sein kann.</p>

                    <h2>4) Kontaktaufnahme</h2>

                    <p><b>4.1</b>&nbsp;WhatsApp-Business</p>

                    <p>Wir bieten Besuchern unserer Webseite die M&ouml;glichkeit, mit uns &uuml;ber den Nachrichtendienst WhatsApp der WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, in Kontakt zu treten. Hierf&uuml;r verwenden wir die sog. &bdquo;Business-Version&#8220; von WhatsApp.</p>

                    <p>Sofern Sie uns anl&auml;sslich eines konkreten Gesch&auml;fts (beispielsweise einer get&auml;tigten Bestellung) per WhatsApp kontaktieren, speichern und verwenden wir die von Ihnen bei WhatsApp genutzte Mobilfunknummer sowie &ndash; falls bereitgestellt &ndash; Ihren Vor- und Nachnamen gem&auml;&szlig; Art. 6 Abs. 1 lit. b. DSGVO zur Bearbeitung und Beantwortung Ihres Anliegens. Auf Basis derselben Rechtsgrundlage werden wir Sie per WhatsApp gegebenenfalls um die Bereitstellung weiterer Daten (Bestellnummer, Kundennummer, Anschrift oder E-Mailadresse) bitten, um Ihre Anfrage einem bestimmten Vorgang zuordnen zu k&ouml;nnen.</p>

                    <p>Nutzen Sie unseren WhatsApp-Kontakt f&uuml;r allgemeine Anfragen (etwa zum Leistungsspektrum, zu Verf&uuml;gbarkeiten oder zu unserem Internetauftritt) speichern und verwenden wir die von Ihnen bei WhatsApp genutzte Mobilfunknummer sowie &ndash; falls bereitgestellt &ndash; Ihren Vor- und Nachnamen gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der effizienten und zeitnahen Bereitstellung der gew&uuml;nschten Informationen.</p>

                    <p>Ihre Daten werden stets nur zur Beantwortung Ihres Anliegens per WhatsApp verwendet. Eine Weitergabe an Dritte findet nicht statt.</p>

                    <p>Bitte beachten Sie, dass WhatsApp Business Zugriff auf das Adressbuch des von uns hierf&uuml;r verwendeten mobilen Endger&auml;ts erh&auml;lt und im Adressbuch gespeicherte Telefonnummern automatisch an einen Server des Mutterkonzerns Meta Platforms Inc. in den USA &uuml;bertr&auml;gt. F&uuml;r den Betrieb unseres WhatsApp-Business-Kontos verwenden wir ein mobiles Endger&auml;t, in dessen Adressbuch ausschlie&szlig;lich die WhatsApp-Kontaktdaten solcher Nutzer gespeichert werden, die mit uns per WhatsApp auch in Kontakt getreten sind.</p>

                    <p>Hierdurch wird sichergestellt, dass jede Person, deren WhatsApp- Kontaktdaten in unserem Adressbuch gespeichert sind, bereits bei erstmaliger Nutzung der App auf seinem Ger&auml;t durch Akzeptanz der WhatsApp-Nutzungsbedingungen in die &Uuml;bermittlung seiner WhatsApp-Telefonnummer aus den Adressb&uuml;chern seiner Chat-Kontakte gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO eingewilligt hat. Eine &Uuml;bermittlung von Daten solcher Nutzer, die WhatsApp nicht verwenden und/oder uns nicht &uuml;ber WhatsApp kontaktiert haben, wird insofern ausgeschlossen.</p>

                    <p>Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch WhatsApp sowie Ihre diesbez&uuml;glichen Rechte und Einstellungsm&ouml;glichkeiten zum Schutz Ihrer Privatsph&auml;re entnehmen Sie bitte den Datenschutzhinweisen von WhatsApp: <a href="https://www.whatsapp.com/legal/?eea=1#privacy-policy" target="_blank">https://www.whatsapp.com<wbr/>/legal<wbr/>/?eea=1#privacy-policy</a></p>

                        <p>Im Rahmen der oben genannten Verarbeitungen kann es zu Daten&uuml;bertragungen an Server von Meta Platforms Inc. in den USA kommen.</p>

                        <p>F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus sicherstellt.</p>

                        <p><b>4.2</b>&nbsp;Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden &ndash; ausschlie&szlig;lich zum Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im daf&uuml;r erforderlichen Umfang &ndash; personenbezogene Daten verarbeitet.</p>

                        <p>Rechtsgrundlage f&uuml;r die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab, so ist zus&auml;tzliche Rechtsgrundlage f&uuml;r die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gel&ouml;scht, wenn sich aus den Umst&auml;nden entnehmen l&auml;sst, dass der betroffene Sachverhalt abschlie&szlig;end gekl&auml;rt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

                        <h2>5) Datenverarbeitung bei Er&ouml;ffnung eines Kundenkontos</h2>

                        <p>Gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO werden personenbezogene Daten im jeweils erforderlichen Umfang weiterhin erhoben und verarbeitet, wenn Sie uns diese bei der Er&ouml;ffnung eines Kundenkontos mitteilen. Welche Daten f&uuml;r die Kontoer&ouml;ffnung erforderlich sind, entnehmen Sie der Eingabemaske des entsprechenden Formulars auf unserer Website.</p>

                        <p>Eine L&ouml;schung Ihres Kundenkontos ist jederzeit m&ouml;glich und kann durch eine Nachricht an die o.g. Adresse des Verantwortlichen erfolgen. Nach L&ouml;schung Ihres Kundenkontos werden Ihre Daten gel&ouml;scht, sofern alle dar&uuml;ber geschlossenen Vertr&auml;ge vollst&auml;ndig abgewickelt sind, keine gesetzlichen Aufbewahrungsfristen entgegenstehen und unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.</p>

                        <h2>6) Datenverarbeitung zur Bestellabwicklung</h2>

                        <p><b>6.1</b>&nbsp;Soweit f&uuml;r die Vertragsabwicklung zu Liefer- und Zahlungszwecken erforderlich, werden die von uns erhobenen personenbezogenen Daten gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO an das beauftragte Transportunternehmen und das beauftragte Kreditinstitut weitergegeben.</p>

                        <p>Sofern wir Ihnen auf Grundlage eines entsprechenden Vertrages Aktualisierungen f&uuml;r Waren mit digitalen Elementen oder f&uuml;r digitale Produkte schulden, verarbeiten wir die von Ihnen bei der Bestellung &uuml;bermittelten Kontaktdaten (Name, Anschrift, Mailadresse), um Sie im Rahmen unserer gesetzlichen Informationspflichten gem&auml;&szlig; Art. 6 Abs. 1 lit. c DSGVO auf geeignetem Kommunikationsweg (etwa postalisch oder per Mail) &uuml;ber anstehende Aktualisierungen im gesetzlich vorgesehenen Zeitraum pers&ouml;nlich zu informieren. Ihre Kontaktdaten werden hierbei streng zweckgebunden f&uuml;r Mitteilungen &uuml;ber von uns geschuldete Aktualisierungen verwendet und zu diesem Zweck durch uns nur insoweit verarbeitet, wie dies f&uuml;r die jeweilige Information erforderlich ist.</p>

                        <p>Zur Abwicklung Ihrer Bestellung arbeiten wir ferner mit dem / den nachstehenden Dienstleister(n) zusammen, die uns ganz oder teilweise bei der Durchf&uuml;hrung geschlossener Vertr&auml;ge unterst&uuml;tzen. An diese Dienstleister werden nach Ma&szlig;gabe der folgenden Informationen gewisse personenbezogene Daten &uuml;bermittelt.</p>

                        <p><b>6.2</b>&nbsp;Verwendung von Paymentdienstleistern (Zahlungsdiensten)</p>

                        <p>- Paypal</p>

                        <p>Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des folgenden Anbieters zur Verf&uuml;gung: PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg</p>

                        <p>Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung gehen, werden an diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und Zahlkarteninformationen, W&auml;hrung und Transaktionsnummer) sowie Informationen &uuml;ber den Inhalt Ihrer Bestellung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in diesem Falle ausschlie&szlig;lich zum Zweck der Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierf&uuml;r erforderlich ist.</p>

                        <p>Bei Auswahl einer Zahlungsart, bei der wir in Vorleistung gehen, werden Sie im Bestellablauf auch aufgefordert, bestimmte pers&ouml;nliche Daten (Vor- und Nachname, Stra&szlig;e, Hausnummer, Postleitzahl, Ort, Geburtsdatum, E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem alternativen Zahlungsmittel) anzugeben.</p>

                        <p>Um in solchen F&auml;llen unser berechtigtes Interesse an der Feststellung Ihrer Zahlungsf&auml;higkeit zu wahren, werden diese Daten von uns gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO zum Zwecke einer Bonit&auml;tspr&uuml;fung an den Anbieter weitergeleitet. Der Anbieter pr&uuml;ft auf Basis der von Ihnen angegebenen pers&ouml;nlichen Daten sowie weiterer Daten (wie etwa Warenkorb, Rechnungsbetrag, Bestellhistorie, Zahlungserfahrungen), ob die von Ihnen ausgew&auml;hlte Zahlungsm&ouml;glichkeit im Hinblick auf Zahlungs- und/oder Forderungsausfallrisiken gew&auml;hrt werden kann.</p>

                        <p>Die Bonit&auml;tsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte). Soweit Score-Werte in das Ergebnis der Bonit&auml;tsauskunft einflie&szlig;en, haben sie ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen Verfahren. In die Berechnung der Score-Werte flie&szlig;en unter anderem, aber nicht ausschlie&szlig;lich, Anschriftendaten ein.</p>

                        <p>Sie k&ouml;nnen dieser Verarbeitung Ihrer Daten jederzeit durch eine Nachricht an uns oder gegen&uuml;ber dem Anbieter widersprechen. Jedoch bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgem&auml;&szlig;en Zahlungsabwicklung erforderlich ist.<br />
                            - Paypal Checkout</p>

                        <p>Diese Website nutzt PayPal Checkout, ein Online-Zahlungssystem von PayPal, das sich aus PayPal-eigenen Zahlungsarten und lokalen Zahlmethoden von Drittanbietern zusammensetzt.</p>

                        <p>Bei Zahlung via PayPal, Kreditkarte via PayPal, Lastschrift via PayPal oder &ndash; falls angeboten &ndash; &bdquo;Sp&auml;ter Bezahlen&#8220; via PayPal geben wir Ihre Zahlungsdaten im Rahmen der Zahlungsabwicklung an die PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg (nachfolgend &quot;PayPal&quot;), weiter. Die Weitergabe erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO und nur insoweit, als dies f&uuml;r die Zahlungsabwicklung erforderlich ist.</p>

                        <p>PayPal beh&auml;lt sich f&uuml;r die Zahlungsmethoden Kreditkarte via PayPal, Lastschrift via PayPal oder &ndash; falls angeboten - &bdquo;Sp&auml;ter bezahlen&#8220; via PayPal &ndash; die Durchf&uuml;hrung einer Bonit&auml;tsauskunft vor. Hierf&uuml;r werden Ihre Zahlungsdaten gegebenenfalls gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses von PayPal an der Feststellung Ihrer Zahlungsf&auml;higkeit an Auskunfteien weitergegeben. Das Ergebnis der Bonit&auml;tspr&uuml;fung in Bezug auf die statistische Zahlungsausfallwahrscheinlichkeit verwendet PayPal zum Zweck der Entscheidung &uuml;ber die Bereitstellung der jeweiligen Zahlungsmethode. Die Bonit&auml;tsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte). Soweit Score-Werte in das Ergebnis der Bonit&auml;tsauskunft einflie&szlig;en, haben sie ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen Verfahren. In die Berechnung der Score-Werte flie&szlig;en unter anderem, aber nicht ausschlie&szlig;lich, Anschriftendaten ein. Sie k&ouml;nnen dieser Verarbeitung Ihrer Daten jederzeit durch eine Nachricht an PayPal widersprechen. Jedoch bleibt PayPal ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgem&auml;&szlig;en Zahlungsabwicklung erforderlich ist.</p>

                        <p>Bei Auswahl der PayPal-Zahlungsart &bdquo;Rechnungskauf&#8220; werden Ihre Zahlungsdaten zur Vorbereitung der Zahlung zun&auml;chst an PayPal &uuml;bermittelt, woraufhin PayPal diese zur Durchf&uuml;hrung der Zahlung an die Ratepay GmbH, Franklinstra&szlig;e 28-29, 10587 Berlin (&quot;Ratepay&quot;) weiterleitet. Rechtsgrundlage ist jeweils Art. 6 Abs. 1 lit. b DSGVO. In diesem Fall f&uuml;hrt RatePay im eigenen Namen eine Identit&auml;ts- und Bonit&auml;tspr&uuml;fung zur Feststellung der Zahlungsf&auml;higkeit entsprechend dem oben bereits genannten Prinzip durch und gibt Ihre Zahlungsdaten aufgrund des berechtigten Interesses an der Feststellung der Zahlungsf&auml;higkeit gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO an Auskunfteien weiter. Eine Liste der Auskunfteien, auf die Ratepay zur&uuml;ckgreifen kann, findet sich hier: <a href="https://www.ratepay.com/legal-payment-creditagencies/" target="_blank">https://www.ratepay.com<wbr/>/legal-payment-creditagencies<wbr/>/</a></p>

                            <p>Bei Nutzung der Zahlungsart eines lokalen Drittanbieters werden Ihre Zahlungsdaten zur Vorbereitung der Zahlung zun&auml;chst gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO an PayPal weitergegeben. Abh&auml;ngig von Ihrer Auswahl einer verf&uuml;gbaren lokalen Zahlungsart &uuml;bermittelt PayPal Ihre Zahlungsdaten zur Durchf&uuml;hrung der Zahlung sodann gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO an den entsprechenden Anbieter:<br />
                                - Sofort (SOFORT GmbH, Theresienh&ouml;he 12, 80339 M&uuml;nchen, Deutschland)<br />
                                - iDeal (Currence Holding BV, Beethovenstraat 300 Amsterdam, Niederlande)<br />
                                - giropay (Paydirekt GmbH, Stephanstr. 14-16, 60313 Frankfurt am Main<br />
                                - bancontact (Bancontact Payconiq Company, Rue d'Arlon 82, 1040 Br&uuml;ssel, Belgien)<br />
                                - blik (Polski Standard P&lstrok;atno&sacute;ci sp. z o.o., ul. Czerniakowska 87A, 00-718 Warschau, Polen)<br />
                                - eps (PSA Payment Services Austria GmbH, Handelskai 92, Gate 2<br />
                                1200 Wien, &Ouml;sterreich)<br />
                                - MyBank (PRETA S.A.S, 40 Rue de Courcelles, F-75008 Paris, Frankreich)<br />
                                - Przelewy24 (PayPro SA, Kanclerska 15A, 60-326 Pozna&nacute;, Polen)<br />
                                Weitere datenschutzrechtliche Informationen entnehmen Sie bitte der Datenschutzerkl&auml;rung von PayPal: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank">https://www.paypal.com<wbr/>/de<wbr/>/webapps<wbr/>/mpp<wbr/>/ua<wbr/>/privacy-full</a><br />
                                    - Stripe</p>

                                    <p>Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des folgenden Anbieters zur Verf&uuml;gung: Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland</p>

                                    <p>Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und Zahlkarteninformationen, W&auml;hrung und Transaktionsnummer) sowie Informationen &uuml;ber den Inhalt Ihrer Bestellung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in diesem Falle ausschlie&szlig;lich zum Zweck der Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierf&uuml;r erforderlich ist.</p>

                                    <p>Bei Auswahl einer Zahlungsart, bei der der Anbieter in Vorleistung geht (etwa Rechnungs- oder Ratenkauf bzw. Lastschrift), werden Sie im Bestellablauf auch aufgefordert, bestimmte pers&ouml;nliche Daten (Vor- und Nachname, Stra&szlig;e, Hausnummer, Postleitzahl, Ort, Geburtsdatum, E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem alternativen Zahlungsmittel) anzugeben.</p>

                                    <p>Um unser berechtigtes Interesse an der Feststellung der Zahlungsf&auml;higkeit unserer Kunden zu wahren, werden diese Daten von uns gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO zum Zweck einer Bonit&auml;tspr&uuml;fung an den Anbieter weitergeleitet. Der Anbieter pr&uuml;ft auf Basis der von Ihnen angegebenen pers&ouml;nlichen Daten sowie weiterer Daten (wie etwa Warenkorb, Rechnungsbetrag, Bestellhistorie, Zahlungserfahrungen), ob die von Ihnen ausgew&auml;hlte Zahlungsm&ouml;glichkeit im Hinblick auf Zahlungs- und/oder Forderungsausfallrisiken gew&auml;hrt werden kann.</p>

                                    <p>Die Bonit&auml;tsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte). Soweit Score-Werte in das Ergebnis der Bonit&auml;tsauskunft einflie&szlig;en, haben sie ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen Verfahren. In die Berechnung der Score-Werte flie&szlig;en unter anderem, aber nicht ausschlie&szlig;lich, Anschriftendaten ein.</p>

                                    <p>Sie k&ouml;nnen dieser Verarbeitung Ihrer Daten jederzeit durch eine Nachricht an uns oder gegen&uuml;ber dem Anbieter widersprechen. Jedoch bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgem&auml;&szlig;en Zahlungsabwicklung erforderlich ist.</p>

                                    <p><b>6.3</b>&nbsp;Elektronische K&uuml;ndigungsm&ouml;glichkeit f&uuml;r Dauerschuldverh&auml;ltnisse mit Verbrauchern</p>

                                    <p>Verbraucher, welche auf dieser Website Vertr&auml;ge &uuml;ber entgeltpflichtige Dauerschuldverh&auml;ltnisse (etwa Abonnement-Vertr&auml;ge) eingegangen sind, haben die M&ouml;glichkeit, diese &uuml;ber eine elektronische Schaltfl&auml;che im Einklang mit den geltenden K&uuml;ndigungsfristen zu k&uuml;ndigen.</p>

                                    <p>Die Bet&auml;tigung der Schaltfl&auml;che f&uuml;hrt zu einer Best&auml;tigungsseite, auf welcher der Verbraucher n&auml;here Angaben zur K&uuml;ndigung machen, sich eindeutig identifizieren und seine K&uuml;ndigung im Anschluss elektronisch erkl&auml;ren kann.</p>

                                    <p>Die Erhebung personenbezogener Daten und deren &Uuml;bermittlung an uns erfolgt hierbei gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO und nur insoweit, wie sie f&uuml;r die ordnungsgem&auml;&szlig;e Bearbeitung der K&uuml;ndigung erforderlich sind. Ebenfalls auf Basis von Art. 6 Abs. 1 lit. b DSGVO werden die bereitgestellten personenbezogenen Daten verwendet, um den Zugang der K&uuml;ndigungserkl&auml;rung und den K&uuml;ndigungszeitpunkt auf elektronischem Weg in Textform zu best&auml;tigen. Weitere Rechtsgrundlage f&uuml;r die Verarbeitung ist Art. 6 Abs. 1 lit. c DSGVO. Wir sind zur Vorhaltung einer elektronischen K&uuml;ndigungsm&ouml;glichkeit bei im Wege des elektronischen Gesch&auml;ftsverkehrs geschlossenen Verbrauchervertr&auml;gen &uuml;ber entgeltpflichtige Dauerschuldverh&auml;ltnisse gesetzlich verpflichtet.</p>

                                    <h2>7) Seitenfunktionalit&auml;ten</h2>

                                    <p>Google reCAPTCHA</p>

                                    <p>Auf dieser Website verwenden wir den CAPTCHA-Dienst des folgenden Anbieters: Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland</p>

                                    <p>Daten k&ouml;nnen zudem &uuml;bermittelt werden an: Google LLC, USA. F&uuml;r die optische Gestaltung des Captcha-Fensters werden vom Anbieter &bdquo;Google Fonts&quot;, also von Google aus dem Internet geladene Schriftarten, verwendet. Zu einer Verarbeitung weiterer Informationen als den oben genannten, die bereits &uuml;ber die Funktionalit&auml;t von ReCaptcha an Google &uuml;bertragen werden, kommt es hierbei nicht.</p>

                                    <p>Der Dienst pr&uuml;ft, ob eine Eingabe durch eine nat&uuml;rliche Person oder missbr&auml;uchlich durch maschinelle und automatisierte Verarbeitung erfolgt, und blockiert Spam, DDoS-Attacken sowie &auml;hnliche automatisierte Schadzugriffe. Um sicherzustellen, dass eine Handlung von einem Menschen und nicht von einem automatisierten Bot vorgenommen wird, erhebt der Anbieter die IP-Adresse des verwendeten Endger&auml;ts, Erkennungsdaten des verwendeten Browser- und Betriebssystem-Typ sowie Datum und Dauer des Besuchs und &uuml;bermittelt diese zur Auswertung an Server des Anbieters.</p>

                                    <p>Rechtsgrundlage ist unser berechtigtes Interesse an der Feststellung der individuellen Eigenverantwortung im Internet und der Vermeidung von Missbrauch und Spam gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO.</p>

                                    <p>Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag abgeschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.</p>

                                    <p>F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.</p>

                                    <h2>8) Tools und Sonstiges</h2>

                                    <p>Cookie-Consent-Tool</p>

                                    <p>Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen f&uuml;r einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein sog. &bdquo;Cookie-Consent-Tool&#8220;. Das &bdquo;Cookie-Consent-Tool&#8220; wird Nutzern bei Seitenaufruf in Form einer interaktive Benutzeroberfl&auml;che angezeigt, auf welcher sich per H&auml;kchensetzung Einwilligungen f&uuml;r bestimmte Cookies und/oder cookie-basierte Anwendungen erteilen lassen. Hierbei werden durch den Einsatz des Tools alle einwilligungspflichtigen Cookies/Dienste nur dann geladen, wenn der jeweilige Nutzer entsprechende Einwilligungen per H&auml;kchensetzung erteilt. So wird sichergestellt, dass nur im Falle einer erteilten Einwilligung derartige Cookies auf dem jeweiligen Endger&auml;t des Nutzers gesetzt werden.</p>

                                    <p>Das Tool setzt technisch notwendige Cookies, um Ihre Cookie-Pr&auml;ferenzen zu speichern. Personenbezogene Nutzerdaten werden hierbei grunds&auml;tzlich nicht verarbeitet.</p>

                                    <p>Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder Protokollierung von Cookie-Einstellungen doch zur Verarbeitung personenbezogener Daten (wie etwa der IP-Adresse), erfolgt diese gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem rechtskonformen, nutzerspezifischen und nutzerfreundlichen Einwilligungsmanagement f&uuml;r Cookies und mithin an einer rechtskonformen Ausgestaltung unseres Internetauftritts.</p>

                                    <p>Weitere Rechtsgrundlage f&uuml;r die Verarbeitung ist ferner Art. 6 Abs. 1 lit. c DSGVO. Wir unterliegen als Verantwortliche der rechtlichen Verpflichtung, den Einsatz technisch nicht notwendiger Cookies von der jeweiligen Nutzereinwilligung abh&auml;ngig zu machen.</p>

                                    <p>Soweit erforderlich, haben wir mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.</p>

                                    <p>Weitere Informationen zum Betreiber und den Einstellungsm&ouml;glichkeiten des Cookie-Consent-Tools finden Sie direkt in der entsprechenden Benutzeroberfl&auml;che auf unserer Website.</p>

                                    <h2>9) Rechte des Betroffenen</h2>

                                    <p><b>9.1</b>&nbsp;Das geltende Datenschutzrecht gew&auml;hrt Ihnen gegen&uuml;ber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei f&uuml;r die jeweiligen Aus&uuml;bungsvoraussetzungen auf die angef&uuml;hrte Rechtsgrundlage verwiesen wird:</p>

                                    <ul>
                                        <li>Auskunftsrecht gem&auml;&szlig; Art. 15 DSGVO;</li>
                                        <li>Recht auf Berichtigung gem&auml;&szlig; Art. 16 DSGVO;</li>
                                        <li>Recht auf L&ouml;schung gem&auml;&szlig; Art. 17 DSGVO;</li>
                                        <li>Recht auf Einschr&auml;nkung der Verarbeitung gem&auml;&szlig; Art. 18 DSGVO;</li>
                                        <li>Recht auf Unterrichtung gem&auml;&szlig; Art. 19 DSGVO;</li>
                                        <li>Recht auf Daten&uuml;bertragbarkeit gem&auml;&szlig; Art. 20 DSGVO;</li>
                                        <li>Recht auf Widerruf erteilter Einwilligungen gem&auml;&szlig; Art. 7 Abs. 3 DSGVO;</li>
                                        <li>Recht auf Beschwerde gem&auml;&szlig; Art. 77 DSGVO.</li>
                                    </ul>

                                    <p><b>9.2</b>&nbsp;WIDERSPRUCHSRECHT</p>

                                    <p>WENN WIR IM RAHMEN EINER INTERESSENABW&Auml;GUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES &Uuml;BERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG F&Uuml;R DIE ZUKUNFT EINZULEGEN.</p>

                                    <p>MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN K&Ouml;NNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN &Uuml;BERWIEGEN, ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN DIENT.</p>

                                    <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE K&Ouml;NNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUS&Uuml;BEN.</p>

                                    <p>MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.</p>

                                    <h2>10) Dauer der Speicherung personenbezogener Daten</h2>

                                    <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und &ndash; sofern einschl&auml;gig &ndash; zus&auml;tzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).</p>

                                    <p>Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdr&uuml;cklichen Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.</p>

                                    <p>Existieren gesetzliche Aufbewahrungsfristen f&uuml;r Daten, die im Rahmen rechtsgesch&auml;ftlicher bzw. rechtsgesch&auml;fts&auml;hnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinem&auml;&szlig;ig gel&ouml;scht, sofern sie nicht mehr zur Vertragserf&uuml;llung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.</p>

                                    <p>Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO aus&uuml;ben, es sei denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten &uuml;berwiegen, oder die Verarbeitung dient der Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen.</p>

                                    <p>Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO aus&uuml;ben.</p>

                                    <p>Sofern sich aus den sonstigen Informationen dieser Erkl&auml;rung &uuml;ber spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im &Uuml;brigen dann gel&ouml;scht, wenn sie f&uuml;r die Zwecke, f&uuml;r die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.</p>
                                </CardContent>
                                </Card>
                                </main>
                                    )
}