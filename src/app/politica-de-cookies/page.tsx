import Link from 'next/link'
import { Metadata } from 'next'
import { openGraph, twitterCard } from '../shared-metadata'
import { PageHeading } from '@/components/PageHeading'

const title = `Política de Cookies | ${process.env.NEXT_PUBLIC_APP_SHORT_NAME}`
const description = `Entenda como a ${process.env.NEXT_PUBLIC_APP_SHORT_NAME} utiliza cookies para melhorar sua experiência no site. Saiba como gerenciar suas preferências de cookies.`

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: '/politica-de-cookies',
  },
  openGraph: {
    ...openGraph,
    title: title,
    description: description,
    url: '/politica-de-cookies',
  },
  twitter: {
    ...twitterCard,
    title: title,
    description: description,
  },
}

export default function CookiesPolicy() {
  return (
    <main>
      <section className="page-content">
        <PageHeading title="Política de Cookies" />

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

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Nome do Cookie</th>
                  <th>Provedor</th>
                  <th>Finalidade</th>
                  <th>Duração</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Distingue usuários únicos</td>
                  <td>2 anos</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics</td>
                  <td>Analisa como os usuários usam o site</td>
                  <td>24 horas</td>
                </tr>
                <tr>
                  <td>_fbp</td>
                  <td>Meta</td>
                  <td>Rastreia visitas em sites</td>
                  <td>3 meses</td>
                </tr>
                <tr>
                  <td>_gac</td>
                  <td>Google Ads</td>
                  <td>Mede conversões de anúncios</td>
                  <td>90 dias</td>
                </tr>
              </tbody>
            </table>
          </div>

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
