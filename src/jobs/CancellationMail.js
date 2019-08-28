import sendMail from '../lib/Mail';
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

const key = 'CancellationMail';

const handle = async ({ data }) => {
    const { appointment, user } = data;
    await sendMail({
        to: `${appointment.provider.name} <${appointment.provider.email}>`,
        subject: 'Agendamento cancelado',
        template: 'cancellation',
        context: {
          provider: appointment.provider.name,
          user: user.name,
          date: format(parseISO(appointment.date), "'dia' dd 'de' MMMM', às' H:mm'h'", { locale: ptBr })
        }
      })        
}

export default { key, handle }