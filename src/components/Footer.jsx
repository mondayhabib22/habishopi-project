const Footer = () => {
  return (
    <div class="bg-gray-950 text-gray-300">
      <div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div class="md:col-span-2">
          <h2 class="text-3xl font-bold text-white">HabiShopi</h2>
          <p class="mt-4 text-sm leading-relaxed">
            At HabiShopi, we believe shopping should be simple, affordable, and
            trustworthy. We carefully curate products to ensure quality, value,
            and satisfaction — so you never have to worry about what you're
            buying.
          </p>

          <div class="mt-4 text-sm space-y-2">
            <p>✔ Secure Payments</p>
            <p>✔ Fast & Reliable Delivery</p>
            <p>✔ Easy Returns Policy</p>
            <p>✔ 24/7 Customer Support</p>
          </div>

          <div class="flex space-x-4 mt-5">
            <a href="#" class="hover:text-white">
              Facebook
            </a>
            <a href="#" class="hover:text-white">
              Instagram
            </a>
            <a href="#" class="hover:text-white">
              Twitter
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Shop</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#" class="hover:text-white">
                All Products
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Discount Deals
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Customer Support</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#" class="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#" class="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 py-10 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 class="text-white font-semibold">💳 Secure Payments</h4>
            <p class="text-sm mt-2">
              We use trusted payment gateways to ensure your transactions are
              safe and encrypted.
            </p>
          </div>

          <div>
            <h4 class="text-white font-semibold">🚚 Nationwide Delivery</h4>
            <p class="text-sm mt-2">
              Fast delivery across Nigeria with reliable logistics partners.
            </p>
          </div>

          <div>
            <h4 class="text-white font-semibold">⭐ Trusted by Customers</h4>
            <p class="text-sm mt-2">
              Thousands of happy customers trust HabiShopi for quality and
              service.
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 py-10 px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-white text-xl font-semibold">Stay Updated</h3>
          <p class="text-sm mt-2 mb-5">
            Get exclusive deals, product updates, and special offers directly to
            your inbox.
          </p>

          <form class="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              class="px-4 py-3 rounded bg-gray-800 border border-gray-700 w-full sm:w-auto flex-1 focus:outline-none"
            />
            <button class="bg-blue-600 px-6 py-3 rounded text-white cursor-pointer hover:bg-blue-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-800 py-6 px-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div class="space-y-1 text-center md:text-left">
            <p>Email: support@habishopi.com</p>
            <p>Phone: +234 XXX XXX XXXX</p>
          </div>

          <div class="mt-4 md:mt-0 text-center">
            © 2026 HabiShopi. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
