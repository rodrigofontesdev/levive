import Link from 'next/link'

export default function CookiesPolicy() {
  return (
    <main>
      <section className="page-content">
        <div className="bg-black py-40 px-5">
          <h1 className="uppercase text-7xl text-center text-white">Política de Cookies</h1>
        </div>

        <div className="max-w-screen-xl mx-auto py-24 px-5">
          <p className="font-bold">Última atualização: 27 de novembro de 2024</p>

          <h2>1. Introdução</h2>

          <p>
            A Clínica Levive valoriza sua privacidade e acredita na transparência sobre como
            coletamos e usamos dados. Esta Política de Cookies explica como utilizamos cookies e
            tecnologias similares em nosso website clinicalevive.com.
          </p>

          <h2>2. O que são Cookies?</h2>

          <p>
            Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo
            (computador, smartphone ou tablet) quando você visita nosso website. Eles nos ajudam a
            fazer o site funcionar adequadamente, torná-lo mais seguro, proporcionar uma melhor
            experiência de usuário e entender como o site está sendo usado.
          </p>

          <h2>3. Tipos de Cookies que Utilizamos</h2>

          <h3>3.1 Cookies Essenciais</h3>

          <p>
            São cookies fundamentais para o funcionamento básico do site. Eles permitem que você
            navegue pelo site e use recursos essenciais como áreas seguras e sistemas de agendamento
            online. Estes cookies não coletam informações que podem ser utilizadas para fins de
            marketing.
          </p>

          <h3>3.2 Cookies de Desempenho e Analytics (Google Analytics)</h3>

          <p>
            Utilizamos o Google Analytics para entender como os visitantes interagem com nosso site.
            Estes cookies coletam informações como:
          </p>

          <ul>
            <li>Páginas mais visitadas</li>
            <li>Tempo de permanência no site</li>
            <li>Origem do tráfego</li>
            <li>Problemas de navegação que possam surgir</li>
          </ul>

          <p>Todas estas informações são anonimizadas e não permitem sua identificação pessoal.</p>

          <h3>3.3 Cookies de Publicidade (Google Ads e Meta Ads)</h3>

          <p>Utilizamos cookies de publicidade para:</p>

          <ul>
            <li>Mostrar anúncios mais relevantes baseados em seus interesses</li>
            <li>Limitar o número de vezes que você vê um anúncio</li>
            <li>Medir a eficácia de nossas campanhas publicitárias</li>
          </ul>

          <p>Estes cookies são fornecidos por:</p>

          <ul>
            <li>Google Ads: para gerenciar e otimizar nossas campanhas de busca e display</li>
            <li>
              Meta Ads (Facebook): para rastrear conversões e direcionar anúncios nas plataformas
              Meta
            </li>
          </ul>

          <h2>4. Como Gerenciar Cookies</h2>

          <h3>4.1 Através do seu Navegador</h3>

          <p>Você pode gerenciar cookies através das configurações do seu navegador. Você pode:</p>

          <ul>
            <li>Bloquear todos os cookies</li>
            <li>Aceitar todos os cookies</li>
            <li>Escolher quais cookies aceitar</li>
          </ul>

          <p>Para ajustar estas configurações, consulte o menu de ajuda do seu navegador:</p>

          <ul>
            <li>Google Chrome</li>
            <li>Safari</li>
            <li>Firefox</li>
            <li>Microsoft Edge</li>
          </ul>

          <h3>4.2 Configurações Específicas por Plataforma</h3>

          <h4>Google Analytics e Google Ads:</h4>

          <ul>
            <li>
              Instale a{' '}
              <Link
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
              >
                Extensão de Opt-out do Google Analytics
              </Link>
            </li>
            <li>
              Acesse as{' '}
              <Link
                href="https://myadcenter.google.com"
                target="_blank"
              >
                Configurações de Anúncios do Google
              </Link>
            </li>
          </ul>

          <h4>Meta Ads (Facebook):</h4>

          <ul>
            <li>
              Ajuste suas preferências de publicidade nas{' '}
              <Link
                href="https://accountscenter.facebook.com/ads"
                target="_blank"
              >
                Configurações de Anúncios do Facebook
              </Link>
            </li>
          </ul>

          <h2>5. Impacto da Desativação de Cookies</h2>

          <p>A desativação de cookies pode impactar sua experiência em nosso site:</p>

          <ul>
            <li>
              Cookies essenciais: algumas funcionalidades do site podem não funcionar corretamente
            </li>
            <li>Cookies de análise: não poderemos melhorar o site com base no uso</li>
            <li>Cookies de publicidade: você poderá receber anúncios menos relevantes</li>
          </ul>

          <h2>6. Atualizações desta Política</h2>

          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que você a revise
            regularmente para estar informado sobre como protegemos suas informações.
          </p>

          <h2>7. Mais Informações</h2>

          <h3>7.1 Cookies Específicos Utilizados</h3>

          <table className="w-full max-w-full border-collapse">
            <thead className="border border-black">
              <tr>
                <th className="py-2 px-4 text-left">Nome do Cookie</th>
                <th className="py-2 px-4 text-left">Provedor</th>
                <th className="py-2 px-4 text-left">Finalidade</th>
                <th className="py-2 px-4 text-left">Duração</th>
              </tr>
            </thead>

            <tbody className="border border-black">
              <tr className="border-b border-black">
                <td className="py-2 px-4 text-left">_ga</td>
                <td className="py-2 px-4 text-left">Google Analytics</td>
                <td className="py-2 px-4 text-left">Distingue usuários únicos</td>
                <td className="py-2 px-4 text-left">2 anos</td>
              </tr>
              <tr className="border-b border-black">
                <td className="py-2 px-4 text-left">_gid</td>
                <td className="py-2 px-4 text-left">Google Analytics</td>
                <td className="py-2 px-4 text-left">Analisa como os usuários usam o site</td>
                <td className="py-2 px-4 text-left">24 horas</td>
              </tr>
              <tr className="border-b border-black">
                <td className="py-2 px-4 text-left">_fbp</td>
                <td className="py-2 px-4 text-left">Meta</td>
                <td className="py-2 px-4 text-left">Rastreia visitas em sites</td>
                <td className="py-2 px-4 text-left">3 meses</td>
              </tr>
              <tr className="border-b border-black">
                <td className="py-2 px-4 text-left">_gac</td>
                <td className="py-2 px-4 text-left">Google Ads</td>
                <td className="py-2 px-4 text-left">Mede conversões de anúncios</td>
                <td className="py-2 px-4 text-left">90 dias</td>
              </tr>
            </tbody>
          </table>

          <h3>7.2 Contato</h3>

          <p>Para dúvidas sobre nossa Política de Cookies:</p>

          <ul>
            <li>E-mail: contato@clinicalevive.com</li>
            <li>Telefone: (11) 5936-8550</li>
            <li>
              Endereço: RUA C, 549, QUADRA 30 LOTE 23 E 24, CIDADE NOVA, PARAUAPEBAS - PA, CEP
              68.515-000
            </li>
          </ul>

          <h2>8. Consentimento</h2>

          <p>
            Ao continuar navegando em nosso site, você concorda com o uso de cookies de acordo com
            esta Política. Se você não concordar, por favor, ajuste as configurações de seu
            navegador ou deixe de usar nosso site.
          </p>
        </div>
      </section>
    </main>
  )
}
