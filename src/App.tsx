import {
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Smartphone,
  BarChart3,
  Bell,
  Shield,
  ArrowRight,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm">
                Biznesingiz uchun Zamonaviy yechim
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-6">
              Nasiya savdoni boshqarish endi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                oson
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mijozlaringiz, to'lovlar va qarzlarni bir ilovada nazorat qiling.
            Vaqtingizni tejang, daromadingizni oshiring.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="group bg-white cursor-pointer font-semibold text-blue-700 px-10 py-5 rounded-2xl hover:bg-yellow-300 transition-all text-lg shadow-2xl inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Bepul sinab ko'ring
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Bepul sinov</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Karta kerak emas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>1 daqiqada tayyor</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
              Qanday muammolarni hal qilamiz?
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Agar sizda ham bu muammolar bo'lsa, biz sizga yordam beramiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Vaqt yo'qotish",
                desc: "Daftarlarda yozish va hisob-kitob qilish ko'p vaqt talab qiladi. Xatoliklar tez-tez uchraydi.",
                delay: 0,
              },
              {
                icon: Users,
                title: "Mijozlarni kuzatish qiyin",
                desc: "Kim qancha qarz, kim to'ladi, kim to'lamadi - bularni eslab qolish va nazorat qilish mushkul.",
                delay: 0.2,
              },
              {
                icon: TrendingUp,
                title: "Qarzlar oshib boradi",
                desc: "To'lov muddati o'tgan mijozlarga o'z vaqtida eslatma berish qiyin. Qarzlar to'planib qoladi.",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -8 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <motion.div
                    className="text-red-500 mb-4 inline-block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-14 h-14" />
                  </motion.div>
                  <h3 className="text-2xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 opacity-50"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo placeholder */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 mb-6 from-blue-600 to-purple-600 rounded-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/favicon.svg" alt="logo"/>
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Barcha muammolarga{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                bitta yechim
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bizning mobil ilovamiz nasiya savdo bilan shug'ullanuvchi
              bizneslar uchun maxsus ishlab chiqilgan. Mijozlar, to'lovlar va
              qarzlarni avtomatik nazorat qiladi.
            </p>
            <motion.p
              className="text-lg text-gray-600 bg-blue-100 rounded-2xl p-6 inline-block"
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Endi sizga daftar, qalam va kalkulyator kerak emas. Hamma narsa
              telefon ilovasida.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4">
              Asosiy imkoniyatlar
            </h2>
            <p className="text-center text-blue-200 mb-16 text-lg">
              Biznesingizni boshqarish uchun kerakli hamma narsa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Mijozlar bazasi",
                desc: "Barcha mijozlarni bir joyda saqlang va boshqaring",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: BarChart3,
                title: "To'lovlarni kuzatish",
                desc: "Oylik to'lovlarni avtomatik hisoblang va qayd qiling",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: Bell,
                title: "Eslatmalar",
                desc: "Muddati yaqinlashgan to'lovlar haqida eslatma oling",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Shield,
                title: "Qarzlarni nazorat",
                desc: "Qolgan qarzlarni real vaqtda ko'ring va tahlil qiling",
                color: "from-green-400 to-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
              Bu mahsulot kimlar uchun?
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Nasiya savdo bilan shug'ullanuvchi barcha bizneslar uchun
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Maishiy texnika do'konlari",
                desc: "Televizor, muzlatgich, kir yuvish mashinasi nasiyaga sotadigan do'konlar",
              },
              {
                title: "Mebel savdosi",
                desc: "Mebel nasiyaga sotadigan magazin va savdo nuqtalari",
              },
              {
                title: "Telefon va gadjetlar",
                desc: "Smartfon, planshet va aksessuarlar nasiyaga sotish bilan shug'ullanuvchilar",
              },
              {
                title: "Boshqa nasiya savdo",
                desc: "Har qanday mahsulotni nasiyaga sotuvchi kichik va o'rta bizneslar",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
              Nima uchun bizni tanlash kerak?
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Bizning afzalliklarimiz
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Oson va tushunarli",
                desc: "Murakkab texnologiyalar yo'q. Ilova juda sodda va har kim ishlatishi mumkin. Hech qanday o'qitish kerak emas.",
                icon: Zap,
              },
              {
                title: "Vaqtni tejaydi",
                desc: "Daftarga yozish o'rniga, bir necha soniyada ma'lumot kiriting. Hisobotlar avtomatik tayyorlanadi.",
                icon: Clock,
              },
              {
                title: "Xatoliklar kamayadi",
                desc: "Qo'lda hisoblashda xatoliklar ko'p bo'ladi. Ilova hamma narsani to'g'ri va aniq hisoblab beradi.",
                icon: CheckCircle,
              },
              {
                title: "Har yerda foydalaning",
                desc: "Telefoningiz qayerda bo'lsa, ilova ham siz bilan. Do'kon, uy yoki yo'lda - farqi yo'q.",
                icon: Smartphone,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <motion.div className="absolute right-0 top-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-6">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
              Qanday ishlaydi?
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              3 ta oddiy qadam
            </p>
          </motion.div>

          <div className="space-y-8 relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-16 bottom-16 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block" />

            {[
              {
                num: "1",
                title: "Ilovani yuklab oling",
                desc: "Mobil ilovani telefoningizga o'rnating va ro'yxatdan o'ting. Bu faqat 1-2 daqiqa vaqt oladi.",
              },
              {
                num: "2",
                title: "Mijozlarni qo'shing",
                desc: "Nasiyaga mahsulot sotganingizda mijoz ma'lumotlarini kiriting. Mahsulot narxi va to'lov shartlarini belgilang.",
              },
              {
                num: "3",
                title: "Nazorat qiling",
                desc: "To'lovlar kelganda belgilang. Ilova qolgan qarzni avtomatik hisoblaydi va kerakli eslatmalar beradi.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0 text-2xl shadow-xl z-10"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.num}
                </motion.div>
                <motion.div
                  className="flex-1 bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo placeholder */}
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 mb-6  rounded-2xl shadow-xl from-yellow-400 to-orange-500 bg-gradient-to-r"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
                <img src="/favicon.svg" alt="logo" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl mb-6">
              Biznesingizni yangi darajaga ko'taring
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Bugun boshlab ko'ring. Hech qanday xavf yo'q. Birinchi oy bepul.
            </p>

            <motion.button
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition-all text-xl shadow-2xl inline-flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Hoziroq boshlash
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <motion.div
              className="mt-8 flex items-center justify-center gap-6 text-blue-100 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Bank kartasi kerak emas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>1 daqiqada tayyor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>To'liq bepul sinov</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Smartphone className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </motion.div>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Nasiya savdoni boshqarish uchun eng yaxshi mobil ilova. Kichik va
              o'rta bizneslar uchun maxsus yaratilgan. Sodda, tez va ishonchli
              yechim.
            </p>
          </motion.div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-center text-gray-400">
              © 2025. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
