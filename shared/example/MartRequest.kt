package th.co.robinhood.services.mart.request

import com.google.gson.annotations.SerializedName


data class MartFavRequest(
    @SerializedName("applicationKey") var applicationKey: String?,
    @SerializedName("voucherCode") var voucherCode: String?,

)