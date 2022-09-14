package th.co.robinhood.services.promotion.request

import com.google.gson.annotations.SerializedName


data class PromotionJaaRequest(
    @SerializedName("applicationKey") var applicationKey: String?,
    @SerializedName("pagingOffset") var pagingOffset: Int?,

)