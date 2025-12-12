import { Question } from '@/types/survey';

export const tutorQuestions: Question[] = [
  {
    id: 'tutor_q1',
    type: 'radio',
    questionEn: 'What is your primary teaching mode?',
    questionSi: 'ඔබ මූලිකවම උගන්වන්නේ කෙසේද?',
    required: true,
    options: [
      { value: 'physical', labelEn: 'Physical Only (Hall/Home)', labelSi: 'භෞතිකව පමණි' },
      { value: 'online', labelEn: 'Online Only (Zoom/Teams)', labelSi: 'Online පමණි' },
      { value: 'hybrid', labelEn: 'Hybrid (Both Physical & Online)', labelSi: 'දෙකම' },
    ],
  },
  {
    id: 'tutor_q2',
    type: 'checkbox',
    questionEn: 'Which subjects/grades do you cover?',
    questionSi: 'ඔබ උගන්වන විෂය පථයන් මොනවාද?',
    required: true,
    options: [
      { value: 'grade1-5', labelEn: 'Grade 1-5 (Schol)', labelSi: 'ශ්‍රේණිය 1-5 (ශිෂ්‍යත්ව)' },
      { value: 'grade6-11', labelEn: 'Grade 6-11 (O/L)', labelSi: 'ශ්‍රේණිය 6-11 (සා/පෙළ)' },
      { value: 'al-science', labelEn: 'A/L Science/Maths', labelSi: 'උ/පෙළ විද්‍යා/ගණිතය' },
      { value: 'al-commerce', labelEn: 'A/L Commerce/Arts/Tech', labelSi: 'උ/පෙළ වාණිජ/කලා/තාක්ෂණ' },
      { value: 'professional', labelEn: 'Professional/Language Courses/Other', labelSi: 'වෘත්තීය/භාෂා පාඨමාලා/වෙනත්' },
    ],
  },
  {
    id: 'tutor_q3',
    type: 'radio',
    questionEn: 'How do you currently send Zoom links or Materials?',
    questionSi: 'ඔබ ළමුන්ට Zoom Link සහ නිබන්ධන යවන්නේ කෙසේද?',
    required: true,
    options: [
      { value: 'whatsapp', labelEn: 'WhatsApp Groups', labelSi: 'WhatsApp සමූහ හරහා' },
      { value: 'telegram', labelEn: 'Telegram Channel', labelSi: 'Telegram Channel' },
      { value: 'email', labelEn: 'Email', labelSi: 'ඊමේල්' },
      { value: 'lms', labelEn: 'A Learning Management System (LMS)', labelSi: 'ඉගෙනුම් කළමනාකරණ පද්ධතියක් (LMS)' },
    ],
  },
  {
    id: 'tutor_q4',
    type: 'checkbox',
    questionEn: 'What are your biggest fears regarding Online Classes?',
    questionSi: 'Online පන්ති සම්බන්ධයෙන් ඔබට ඇති ලොකුම බිය කුමක්ද?',
    required: true,
    options: [
      { value: 'login-sharing', labelEn: 'Students sharing logins with friends', labelSi: 'එක් අයෙකුගේ Login එකෙන් යහළුවන් බැලීම' },
      { value: 'screen-recording', labelEn: 'Screen recording/Downloading my videos', labelSi: 'වීඩියෝ රෙකෝඩ් කිරීම හෝ ඩවුන්ලෝඩ් කිරීම' },
      { value: 'internet-issues', labelEn: 'Bad internet connection affecting quality', labelSi: 'අන්තර්ජාල සම්බන්ධතා බිඳ වැටීම' },
      { value: 'late-payments', labelEn: 'Students not paying fees on time', labelSi: 'වෙලාවට පන්ති ගාස්තු නොගෙවීම' },
    ],
  },
  {
    id: 'tutor_q5',
    type: 'radio',
    questionEn: 'How much time do you spend weekly on checking bank slips/cards?',
    questionSi: 'සතියකට කොපමණ කාලයක් ඔබ රිසිට්පත් පරීක්ෂා කිරීමට වැය කරනවාද?',
    required: true,
    options: [
      { value: 'less-1hr', labelEn: 'Less than 1 hour', labelSi: 'පැයක්ට අඩුවෙන්' },
      { value: '1-5hrs', labelEn: '1 - 5 hours', labelSi: 'පැය 1 ත් 5 ත් අතර' },
      { value: 'more-5hrs', labelEn: 'More than 5 hours', labelSi: 'පැය 5 ට වඩා වැඩි' },
      { value: 'hired', labelEn: 'I hire someone to do it', labelSi: 'ඒ සඳහා අයෙක් පත් කර ඇත' },
    ],
  },
  {
    id: 'tutor_q6',
    type: 'radio',
    questionEn: 'Would you like an automated MCQ marking system?',
    questionSi: 'ස්වයංක්‍රීයව ලකුණු දෙන MCQ පද්ධතියක් ඔබට අවශ්‍යද?',
    required: true,
    options: [
      { value: 'yes', labelEn: 'Yes, very much', labelSi: 'ඔව්, ඉතාම අවශ්‍යයි' },
      { value: 'no', labelEn: 'No, I mark them manually', labelSi: 'නැත, මම ඒවා අතින් පරීක්ෂා කරමි' },
      { value: 'not-relevant', labelEn: 'Not relevant to my subject', labelSi: 'මගේ විෂයට අදාළ නැත' },
    ],
  },
  {
    id: 'tutor_q7',
    type: 'radio',
    questionEn: 'If an app stops students from screen recording your videos, is that important?',
    questionSi: 'සිසුන්ට Screen Record කිරීමට නොහැකි වන සේ ඇප් එකක් තිබීම ඔබට වැදගත්ද?',
    required: true,
    options: [
      { value: 'extremely', labelEn: 'Extremely Important', labelSi: 'ඉතාම වැදගත්' },
      { value: 'nice', labelEn: 'Nice to have', labelSi: 'තිබේ නම් හොඳයි' },
      { value: 'not-important', labelEn: 'Not important', labelSi: 'එතරම් වැදගත් නැත' },
    ],
  },
  {
    id: 'tutor_q8',
    type: 'radio',
    questionEn: 'How much are you willing to pay per student/month for a full system?',
    questionSi: 'සම්පූර්ණ පද්ධතියක් සඳහා එක් සිසුවෙකු වෙනුවෙන් මසකට කොපමණ මුදලක් ගෙවිය හැකිද?',
    required: true,
    options: [
      { value: '20-50', labelEn: 'Rs. 5 - 10', labelSi: 'රු. 5 - 10' },
      { value: '50-100', labelEn: 'Rs. 10 - 20', labelSi: 'රු. 10 - 20' },
      { value: '100+', labelEn: 'Rs. 20+', labelSi: 'රු. 20+' },
      { value: 'fixed', labelEn: 'I prefer a fixed monthly fee', labelSi: 'සිසුන් ගණන නොව, මසකට ස්ථාවර මුදලක් ගෙවීමට කැමතිය' },
    ],
  },
  {
    id: 'tutor_q9',
    type: 'textarea',
    questionEn: 'What is the one specific problem regarding tuition classes that gives you the most stress?',
    questionSi: 'පන්ති පැවැත්වීමේදී ඔබට වැඩිපුරම මානසික වදයක් දෙන ගැටලුව කෙටියෙන් ලියන්න.',
    required: false,
  },
  {
  id: 'tutor_q10',
  type: 'textarea',
  questionEn: 'To make your work easier, what specific solution or platform do you expect?',
  questionSi: 'ඔබේ වැඩකටයුතු වඩාත් පහසු කරගැනීමට අවශ්‍ය නම්, ඔබ බලාපොරොත්තු වන්නේ මොන වගේ Platform එකක්ද?',
  required: false,
}
];

export const instituteQuestions: Question[] = [
  {
    id: 'institute_q1',
    type: 'radio',
    questionEn: 'How many students does your institute manage?',
    questionSi: 'ඔබේ ආයතනයේ සිසුන් කොපමණ ප්‍රමාණයක් සිටීද?',
    required: true,
    options: [
      { value: '100-500', labelEn: '100 - 500', labelSi: '100 - 500' },
      { value: '500-1000', labelEn: '500 - 1000', labelSi: '500 - 1000' },
      { value: '1000-5000', labelEn: '1000 - 5000', labelSi: '1000 - 5000' },
      { value: '5000+', labelEn: '5000+', labelSi: '5000+' },
    ],
  },
  {
    id: 'institute_q2',
    type: 'checkbox',
    questionEn: 'What methods do you use to issue admission cards?',
    questionSi: 'සිසුන් ඇතුලත් කරගැනීමට ඔබ භාවිතා කරන ක්‍රම මොනවාද?',
    required: true,
    options: [
      { value: 'manual', labelEn: 'Manual Writing on Cards', labelSi: 'අතින් ලියන ලද කාඩ්පත්' },
      { value: 'barcode-qr', labelEn: 'Barcodes / QR Codes', labelSi: 'බාර්කෝඩ් / QR කේත' },
      { value: 'biometric', labelEn: 'Biometric (Fingerprint)', labelSi: 'ජෛවමිතික (ඇඟිලි සලකුණු)' },
      { value: 'mobile-app', labelEn: 'Mobile App', labelSi: 'ජංගම ඇප්' },
    ],
  },
  {
    id: 'institute_q3',
    type: 'radio',
    questionEn: 'Is "Fake Bank Slip" fraud a major issue for you?',
    questionSi: 'ව්‍යාජ බැංකු රිසිට්පත් (Fake Slips) එවීම ඔබට ලොකු ගැටලුවක්ද?',
    required: true,
    options: [
      { value: 'yes-huge', labelEn: 'Yes, huge loss of revenue', labelSi: 'ඔව්, එය විශාල පාඩුවක්' },
      { value: 'sometimes', labelEn: 'Sometimes', labelSi: 'සමහර විට සිදුවේ' },
      { value: 'no-manual', labelEn: 'No, we check manually', labelSi: 'නැත, අපි ඒවා පරීක්ෂා කරමු' },
    ],
  },
  {
    id: 'institute_q4',
    type: 'checkbox',
    questionEn: 'What are the main costs you want to reduce?',
    questionSi: 'ඔබට අඩු කර ගැනීමට අවශ්‍ය ප්‍රධාන වියදම් මොනවාද?',
    required: true,
    options: [
      { value: 'printing', labelEn: 'Printing Costs (Tutes/Cards)', labelSi: 'මුද්‍රණ වියදම්' },
      { value: 'sms', labelEn: 'SMS Gateway Costs', labelSi: 'SMS වියදම්' },
      { value: 'video-hosting', labelEn: 'Video Hosting/Data Costs', labelSi: 'වීඩියෝ ඩේටා වියදම්' },
      { value: 'staff', labelEn: 'Staff Salaries', labelSi: 'සේවක වැටුප්' },
    ],
  },
  {
    id: 'institute_q5',
    type: 'radio',
    questionEn: 'How do you manage video recordings for missed classes?',
    questionSi: 'පන්තියට නොපැමිණි සිසුන් සඳහා රෙකෝඩින් ලබා දෙන්නේ කෙසේද?',
    required: true,
    options: [
      { value: 'no-recordings', labelEn: "We don't give recordings", labelSi: 'අපි රෙකෝඩින් ලබා නොදෙමු' },
      { value: 'youtube', labelEn: 'We upload to YouTube (private link)', labelSi: 'YouTube හි Private Link ලෙස' },
      { value: 'website-lms', labelEn: 'We use a website/LMS', labelSi: 'වෙබ් අඩවියක්/LMS භාවිතා කරමු' },
      { value: 'dvd-pendrive', labelEn: 'DVDs / Pen drives', labelSi: 'DVD / Pen Drive' },
    ],
  },
  {
    id: 'institute_q6',
    type: 'radio',
    questionEn: 'Do you need a system that supports "Card Payments" (Visa/Master)?',
    questionSi: 'කාඩ් මගින් (Visa/Master) මුදල් ගෙවීමේ පහසුකම ඔබට අවශ්‍යද?',
    required: true,
    options: [
      { value: 'yes', labelEn: 'Yes, parents ask for it', labelSi: 'ඔව්, දෙමාපියන් එය ඉල්ලා සිටී' },
      { value: 'no', labelEn: 'No, Cash/Bank Deposit is fine', labelSi: 'නැත, මුදල් හෝ බැංකු තැන්පතු ප්‍රමාණවත්' },
    ],
  },
  {
    id: 'institute_q7',
    type: 'radio',
    questionEn: 'How difficult is it to communicate urgent news (e.g., class cancelled) to all students?',
    questionSi: 'හදිසි පණිවිඩයක් (උදා: පන්ති අවලංගු වීමක්) සිසුන් සියල්ලන්ටම දැනුම් දීම කොතරම් අපහසුද?',
    required: true,
    options: [
      { value: 'very-difficult', labelEn: 'Very difficult & expensive', labelSi: 'ඉතා අපහසුයි සහ වියදම් අධිකයි' },
      { value: 'manageable', labelEn: 'Manageable via Facebook/WhatsApp', labelSi: 'Facebook/WhatsApp හරහා කළ හැක' },
      { value: 'easy', labelEn: 'Easy', labelSi: 'පහසුයි' },
    ],
  },
  {
    id: 'institute_q8',
    type: 'textarea',
    questionEn: 'If you could automate one task in your institute completely, what would it be?',
    questionSi: 'ඔබේ ආයතනයේ එක් කාර්යයක් ස්වයංක්‍රීය (Automate) කළ හැකිනම්, එය කුමක්ද?',
    required: false,
  },
  {
  id: 'institute_q9',
  type: 'textarea',
  questionEn: 'What is the main feature you would expect from a new system to help your institute run smoothly?',
  questionSi: 'ඔබේ ආයතනයේ කටයුතු පහසු කරගැනීම සඳහා නව පද්ධතියකින් ඔබ අනිවාර්යයෙන්ම බලාපොරොත්තු වන දේ කුමක්ද?',
  required: false,
}
];

export const studentQuestions: Question[] = [
  {
    id: 'student_q1',
    type: 'radio',
    questionEn: 'What device do you use for online classes?',
    questionSi: 'ඔන්ලයින් පන්ති සඳහා ඔබ භාවිතා කරන්නේ කුමක්ද?',
    required: true,
    options: [
      { value: 'smartphone', labelEn: 'Smartphone', labelSi: 'ජංගම දුරකථනය' },
      { value: 'laptop-desktop', labelEn: 'Laptop / Desktop', labelSi: 'ලැප්ටොප් / ඩෙස්ක්ටොප්' },
      { value: 'tablet', labelEn: 'Tablet / iPad', labelSi: 'ටැබ්ලට් / iPad' },
    ],
  },
  {
    id: 'student_q2',
    type: 'radio',
    questionEn: 'How much data do you usually have for studying?',
    questionSi: 'ඉගෙනුම් කටයුතු සඳහා ඔබට සාමාන්‍යයෙන් ලැබෙන ඩේටා (Data) පහසුකම කෙබඳුද?',
    required: true,
    options: [
      { value: 'unlimited', labelEn: 'Unlimited WiFi / Fibre', labelSi: 'අසීමිත WiFi / Fibre' },
      { value: 'large-package', labelEn: 'Large Data Package (Zoom Package etc.)', labelSi: 'විශාල ඩේටා පැකේජයක් (Zoom Package ආදිය)' },
      { value: 'limited', labelEn: 'Limited Mobile Data', labelSi: 'සීමිත මොබයිල් ඩේටා' },
    ],
  },
  {
    id: 'student_q3',
    type: 'checkbox',
    questionEn: 'What frustrates you about current Tuition Apps/Websites?',
    questionSi: 'දැනට ඇති පන්ති වෙබ් අඩවි හෝ ඇප් වල ඔබට ඇති ගැටලු මොනවාද?',
    required: true,
    options: [
      { value: 'data-usage', labelEn: 'Takes too much data', labelSi: 'වැඩිපුර ඩේටා කැපීම' },
      { value: 'slow', labelEn: 'Slow loading / Getting stuck', labelSi: 'වේගය අඩුවීම හෝ හිරවීම' },
      { value: 'login-issues', labelEn: 'Login issues / Forgot passwords', labelSi: 'Login වීමේ ගැටලු' },
      { value: 'hard-to-find', labelEn: 'Hard to find the correct video', labelSi: 'අදාළ වීඩියෝව සොයාගැනීමට අපහසු වීම' },
    ],
  },
  {
    id: 'student_q4',
    type: 'radio',
    questionEn: 'Do you prefer Live Zoom classes or Watching Recordings?',
    questionSi: 'ඔබ වඩා කැමති Live පන්තියටද නැතහොත් රෙකෝඩින් නැරඹීමටද?',
    required: true,
    options: [
      { value: 'live', labelEn: 'Live Zoom Class', labelSi: 'Live Zoom පන්තිය' },
      { value: 'recordings', labelEn: 'Watching Recordings (Later)', labelSi: 'රෙකෝඩින් නැරඹීම (පසුව)' },
      { value: 'both', labelEn: 'Both', labelSi: 'දෙකම' },
    ],
  },
  {
    id: 'student_q5',
    type: 'radio',
    questionEn: 'How do you usually submit your payment slip?',
    questionSi: 'ඔබ පන්ති ගාස්තු ගෙවූ රිසිට් පත යොමු කරන්නේ කෙසේද?',
    required: true,
    options: [
      { value: 'whatsapp', labelEn: 'WhatsApp to the teacher', labelSi: 'ගුරුවරයාට WhatsApp කිරීමෙන්' },
      { value: 'upload', labelEn: 'Upload to a website', labelSi: 'වෙබ් අඩවියකට Upload කිරීමෙන්' },
      { value: 'show-entrance', labelEn: 'Show it at the class entrance', labelSi: 'පන්තියට ඇතුළු වන තැන පෙන්වීමෙන්' },
    ],
  },
  {
    id: 'student_q6',
    type: 'radio',
    questionEn: 'Would you like "Gamification" (Leaderboards/Points/Badges) in your class app?',
    questionSi: 'පන්ති ඇප් එකේ තරඟකාරී බවක් (Leaderboards/Points) තිබෙනවාට ඔබ කැමතිද?',
    required: true,
    options: [
      { value: 'yes', labelEn: 'Yes, it motivates me', labelSi: 'ඔව්, එය උනන්දුවක් ඇති කරයි' },
      { value: 'no', labelEn: 'No, I just want to study', labelSi: 'නැත, මට අවශ්‍ය ඉගෙන ගැනීමට පමණි' },
    ],
  },
  {
    id: 'student_q7',
    type: 'checkbox',
    questionEn: 'What features would make your life easier?',
    questionSi: 'ඔබට පහසුවක් විය හැකි දේවල් මොනවාද?',
    required: true,
    options: [
      { value: 'offline-download', labelEn: 'Download videos to watch offline', labelSi: 'Offline නැරඹීමට ඩවුන්ලෝඩ් පහසුකම' },
      { value: 'sms-reminder', labelEn: 'Automatic SMS reminder before class', labelSi: 'පන්තියට පෙර SMS පණිවිඩයක් ලැබීම' },
      { value: 'online-mcq', labelEn: 'Online MCQ exams with instant results', labelSi: 'එවලේම ලකුණු ලැබෙන Online ප්‍රශ්න පත්‍ර' },
    ],
  },
  {
    id: 'student_q8',
    type: 'textarea',
    questionEn: 'What is the most annoying thing about joining tuition classes right now?',
    questionSi: 'දැනට ටියුෂන් පන්ති වලට සහභාගී වීමේදී ඔබට ඇති ලොකුම කරදරය කුමක්ද?',
    required: false,
  },
  {
  id: 'student_q9',
  type: 'textarea',
  questionEn: 'If you could create the perfect tuition app, what is the one thing it must have?',
  questionSi: 'ඔබට කැමති ලෙස පන්ති ඇප් එකක් සාදාගැනීමට ලැබුණොත්, එහි අනිවාර්යයෙන්ම තිබිය යුතු පහසුකම කුමක්ද?',
  required: false,
}
];

export const parentQuestions: Question[] = [
  {
    id: 'parent_q1',
    type: 'radio',
    questionEn: 'How confident are you with using technology?',
    questionSi: 'තාක්ෂණය භාවිතා කිරීමට ඔබට ඇති හැකියාව කෙබඳුද?',
    required: true,
    options: [
      { value: 'comfortable', labelEn: 'Very comfortable', labelSi: 'ඉතා හොඳින් භාවිතා කළ හැක' },
      { value: 'basic', labelEn: 'I can manage basic things', labelSi: 'මූලික දේවල් කරගත හැක' },
      { value: 'struggle', labelEn: 'I struggle with apps/websites', labelSi: 'ඇප්/වෙබ් අඩවි භාවිතා කිරීම අපහසුයි' },
    ],
  },
  {
    id: 'parent_q2',
    type: 'radio',
    questionEn: 'How do you prefer to pay class fees?',
    questionSi: 'පන්ති ගාස්තු ගෙවීමට ඔබ වඩාත් කැමති ආකාරය කුමක්ද?',
    required: true,
    options: [
      { value: 'cash', labelEn: 'Giving cash to my child', labelSi: 'දරුවා අතේ මුදල් යැවීම' },
      { value: 'bank', labelEn: 'Bank Deposit/Transfer', labelSi: 'බැංකු තැන්පතු' },
      { value: 'online-card', labelEn: 'Online Card Payment (Credit/Debit Card)', labelSi: 'Credit/Debit Card මගින් Online ගෙවීම' },
    ],
  },
  {
    id: 'parent_q3',
    type: 'checkbox',
    questionEn: "What worries you most about your child's tuition?",
    questionSi: 'දරුවාගේ පන්ති ගැන ඔබට ඇති ලොකුම බිය කුමක්ද?',
    required: true,
    options: [
      { value: 'attending', labelEn: 'Is the child actually attending class?', labelSi: 'දරුවා ඇත්තටම පන්තියට ගියාද යන්න' },
      { value: 'watching', labelEn: 'Is the child watching the videos?', labelSi: 'දරුවා වීඩියෝ නරඹනවාද යන්න' },
      { value: 'fees-paid', labelEn: 'Are the fees paid on time?', labelSi: 'ගාස්තු නියමිත වෙලාවට ගෙවුවාද යන්න' },
      { value: 'safety', labelEn: 'Safety of online content', labelSi: 'Online අන්තර්ගතයේ ආරක්ෂාව' },
    ],
  },
  {
    id: 'parent_q4',
    type: 'radio',
    questionEn: 'Would you like an SMS every time your child enters/leaves the class?',
    questionSi: 'දරුවා පන්තියට ගිය පසු සහ පිටවූ පසු SMS පණිවිඩයක් ලැබෙනවාට ඔබ කැමතිද?',
    required: true,
    options: [
      { value: 'yes', labelEn: 'Yes, definitely', labelSi: 'ඔව්, අනිවාර්යයෙන්ම' },
      { value: 'no', labelEn: 'No, not necessary', labelSi: 'නැත, අවශ්‍ය නොවේ' },
    ],
  },
  {
    id: 'parent_q5',
    type: 'radio',
    questionEn: "How do you currently track your child's exam marks?",
    questionSi: 'දරුවාගේ විභාග ලකුණු ඔබ දැනගන්නේ කෙසේද?',
    required: true,
    options: [
      { value: 'child-tells', labelEn: 'The child tells me', labelSi: 'දරුවා පැවසීමෙන්' },
      { value: 'report-card', labelEn: 'I get a report card', labelSi: 'ප්‍රගති වාර්තාවක් ලැබීමෙන්' },
      { value: 'rarely', labelEn: 'I rarely get to know marks', labelSi: 'ලකුණු දැනගැනීම ඉතා කලාතුරකින් සිදුවේ' },
    ],
  },
  {
    id: 'parent_q6',
    type: 'radio',
    questionEn: 'Would you pay a small convenience fee (e.g., Rs. 50) to pay all class fees in one app?',
    questionSi: 'පන්ති සියල්ලේම ගාස්තු එකම ඇප් එකකින් ගෙවීමට පහසුකම් දෙන්නේ නම්, ඒ සඳහා කුඩා අමතර මුදලක් (රු. 50 වැනි) ගෙවීමට ඔබ කැමතිද?',
    required: true,
    options: [
      { value: 'yes', labelEn: 'Yes, it saves time', labelSi: 'ඔව්, එය කාලය ඉතිරි කරයි' },
      { value: 'no', labelEn: 'No, I will use normal methods', labelSi: 'නැත, මම සාමාන්‍ය ක්‍රම භාවිතා කරමි' },
    ],
  },
  {
    id: 'parent_q7',
    type: 'checkbox',
    questionEn: 'What information do you want to see on a parent dashboard?',
    questionSi: 'දෙමාපියන් සඳහා වන ඇප් එකේ ඔබ දැකීමට කැමති මොනවාද?',
    required: true,
    options: [
      { value: 'attendance', labelEn: 'Attendance History', labelSi: 'පැමිණීමේ වාර්තා' },
      { value: 'payment', labelEn: 'Payment History', labelSi: 'ගෙවීම් වාර්තා' },
      { value: 'exam-marks', labelEn: 'Exam Marks & Rank', labelSi: 'විභාග ලකුණු සහ ස්ථානය' },
      { value: 'remarks', labelEn: "Teacher's Remarks", labelSi: 'ගුරුවරයාගේ සටහන්' },
    ],
  },
  {
    id: 'parent_q8',
    type: 'textarea',
    questionEn: 'What is your biggest request to tuition teachers regarding management?',
    questionSi: 'පන්ති පාලනය සම්බන්ධයෙන් ටියුෂන් ගුරුවරුන්ගෙන් ඔබ කරන ලොකුම ඉල්ලීම කුමක්ද?',
    required: false,
  },
];

export const getQuestionsForRole = (role: string): Question[] => {
  switch (role) {
    case 'tutor':
      return tutorQuestions;
    case 'institute':
      return instituteQuestions;
    case 'student':
      return studentQuestions;
    case 'parent':
      return parentQuestions;
    default:
      return [];
  }
};
