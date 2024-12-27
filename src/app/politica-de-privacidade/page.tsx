import Link from 'next/link'
import { Metadata } from 'next'
import { openGraph, twitterCard } from '../shared-metadata'
import { PageHeading } from '@/components/PageHeading'

const title = `Política de Privacidade | ${process.env.NEXT_PUBLIC_APP_SHORT_NAME}`
const description = `Descubra como a ${process.env.NEXT_PUBLIC_APP_SHORT_NAME} protege sua privacidade. Entenda como coletamos, utilizamos e armazenamos seus dados pessoais.`

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: '/politica-de-privacidade',
  },
  openGraph: {
    ...openGraph,
    title: title,
    description: description,
    url: '/politica-de-privacidade',
  },
  twitter: {
    ...twitterCard,
    title: title,
    description: description,
  },
}

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="page-content">
        <PageHeading title="Política de Privacidade" />

        <div className="max-w-screen-xl mx-auto py-24 px-5">
          <p className="font-bold">Última atualização: 27 de novembro de 2024</p>

          <h2>1. Introdução</h2>

          <p>
            A Clínica Levive LTDA (&quot;nós&quot;, &quot;nosso&quot; ou &quot;Clínica
            Levive&quot;), CNPJ 54.877.764/0001-99, está comprometida com a proteção da sua
            privacidade. Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e protegemos suas informações pessoais.
          </p>

          <h2>2. Informações que Coletamos</h2>

          <h3>2.1 Informações fornecidas diretamente:</h3>

          <ul>
            <li>Nome completo</li>
            <li>Dados de contato (telefone, e-mail, endereço)</li>
            <li>Informações de saúde relevantes para o atendimento</li>
            <li>Documentos de identificação</li>
            <li>Histórico médico</li>
          </ul>

          <h3>2.2 Informações coletadas automaticamente:</h3>

          <ul>
            <li>Dados de acesso ao website</li>
            <li>Informações do dispositivo</li>
            <li>Dados de navegação e interação com o site</li>
            <li>Cookies e tecnologias similares</li>
          </ul>

          <h3>2.3 Tecnologias de Rastreamento</h3>

          <p>Utilizamos as seguintes ferramentas de análise e publicidade:</p>

          <h4>Google Analytics</h4>

          <ul>
            <li>Finalidade: Análise de tráfego e comportamento dos usuários no site</li>
            <li>
              Dados coletados: Páginas visitadas, tempo de permanência, localização geográfica,
              dispositivo utilizado
            </li>
            <li>
              Política de privacidade:{' '}
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
              >
                policies.google.com/privacy
              </Link>
            </li>
          </ul>

          <h4>Google Ads</h4>

          <ul>
            <li>Finalidade: Publicidade direcionada e remarketing</li>
            <li>Dados coletados: Interações com anúncios, conversões, dados demográficos</li>
            <li>
              Política de privacidade:{' '}
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
              >
                policies.google.com/privacy
              </Link>
            </li>
          </ul>

          <h4>Meta Ads (Facebook)</h4>

          <ul>
            <li>Finalidade: Publicidade nas plataformas Meta e análise de conversões</li>
            <li>
              Dados coletados: Interações com anúncios, pixel de rastreamento, dados demográficos
            </li>
            <li>
              Política de privacidade:{' '}
              <Link
                href="https://www.facebook.com/privacy/center"
                target="_blank"
              >
                facebook.com/privacy
              </Link>
            </li>
          </ul>

          <h2>3. Como Utilizamos suas Informações</h2>

          <p>Utilizamos suas informações para:</p>

          <ul>
            <li>Prestação de serviços médicos e ambulatoriais</li>
            <li>Agendamento e gestão de consultas</li>
            <li>Comunicação sobre seus atendimentos</li>
            <li>Realização de exames e procedimentos</li>
            <li>Faturamento e cobranças</li>
            <li>Personalização da sua experiência online</li>
            <li>Marketing e publicidade direcionada</li>
            <li>Análise e melhoria dos nossos serviços</li>
            <li>Cumprimento de obrigações legais e regulatórias</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>

          <p>Suas informações podem ser compartilhadas com:</p>

          <ul>
            <li>Profissionais de saúde envolvidos em seu atendimento</li>
            <li>Laboratórios e outros prestadores de serviços médicos</li>
            <li>Operadoras de planos de saúde (quando aplicável)</li>
            <li>Prestadores de serviços de marketing e análise de dados</li>
            <li>Autoridades públicas (quando exigido por lei)</li>
          </ul>

          <h2>5. Seus Direitos</h2>

          <p>Você tem direito a:</p>

          <ul>
            <li>Acessar seus dados pessoais</li>
            <li>Solicitar correções</li>
            <li>Solicitar a exclusão de seus dados (quando aplicável)</li>
            <li>Revogar consentimento</li>
            <li>Solicitar explicações sobre o uso de seus dados</li>
            <li>Desativar cookies e tecnologias de rastreamento</li>
          </ul>

          <h2>6. Controle de Cookies e Rastreamento</h2>

          <p>Você pode gerenciar suas preferências de cookies e rastreamento através de:</p>

          <ul>
            <li>Configurações do seu navegador</li>
            <li>
              Ferramentas de opt-out do Google:{' '}
              <Link
                href="https://tools.google.com/dlpage/gaoptout?hl=pt-BR"
                target="_blank"
              >
                tools.google.com/dlpage/gaoptout
              </Link>
            </li>
            <li>
              Configurações de privacidade do Facebook:{' '}
              <Link
                href="https://www.facebook.com/settings"
                target="_blank"
              >
                facebook.com/settings
              </Link>
            </li>
          </ul>

          <h2>7. Segurança das Informações</h2>

          <p>
            Implementamos medidas técnicas e organizacionais apropriadas para proteger suas
            informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2>8. Retenção de Dados</h2>

          <p>Mantemos suas informações pelo tempo necessário para:</p>

          <ul>
            <li>Cumprir as finalidades descritas nesta política</li>
            <li>Atender às exigências legais e regulatórias</li>
            <li>Resolver eventuais disputas</li>
          </ul>

          <h2>9. Menores de Idade</h2>

          <p>
            O tratamento de dados de menores de idade é realizado mediante consentimento específico
            e em destaque dado por pelo menos um dos pais ou pelo responsável legal.
          </p>

          <h2>10. Alterações na Política de Privacidade</h2>

          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente
            estará sempre disponível em nosso website.
          </p>

          <h2>11. Contato</h2>

          <p>
            Para questões relacionadas a esta Política de Privacidade ou sobre seus dados pessoais,
            entre em contato conosco:
          </p>

          <ul>
            <li>E-mail: contato@clinicalevive.com</li>
            <li>Telefone: (11) 5936-8550</li>
            <li>
              Endereço: RUA C, 549, QUADRA30 LOTE 23 E 24, CIDADE NOVA, PARAUAPEBAS - PA, CEP
              68.515-000
            </li>
          </ul>

          <h2>12. Legislação Aplicável</h2>

          <p>
            Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção
            de Dados Pessoais (LGPD) e outras legislações aplicáveis.
          </p>
        </div>
      </section>
    </main>
  )
}
